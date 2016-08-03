#!/usr/bin/perl

use warnings;
use strict;
use autodie;
use List::MoreUtils qw/ uniq /;
use List::Util qw/ any first /;
use English qw/ -no_match_vars /;
use File::Basename qw/ basename /;

use Data::Dumper;

use constant {
    START_ADDRESS => 0x44,
    MEM_SIZE      => 4096,
};

my @files = @ARGV;

die "Usage: $PROGRAM_NAME file1.asm [file2.asm ...]\n"
    unless @files;

my @instructions;
push @instructions, _read_asm($_) for @files;

my %op_table = _read_op_table('instructions.txt');
_sanity_check_instructions(@instructions);

# pass 1, look opcodes, build symbol table
my %symbol_table;
{
    my $address = START_ADDRESS();
    foreach my $instruction (@instructions) {
        $instruction->{address} = $address;
        $symbol_table{$instruction->{label}} = $address
            if $instruction->{label};

        _associate_instruction_with_op($instruction);

        $address += $instruction->{length};
    }
}

# add preamble
{
    my @preamble = (
        {
            address  => 0,
            mnemonic => 'LXI',
            operands => ['SP', MEM_SIZE()-1],
            line     => 'LXI SP,'.(MEM_SIZE()-1),
        },
        {
            address  => 3,
            mnemonic => 'JMP',
            operands => ['START'],
            line     => 'JMP START',
        },
    );
    
    _associate_instruction_with_op($_) for @preamble;
    
    @instructions = (@preamble, @instructions);
}

# pass 2, handle operands
{
    my @expanded_instructions;
    foreach my $instruction (@instructions) {
        push @expanded_instructions, $instruction;

        if ($instruction->{length} == 2) {
            push @expanded_instructions, {
                address => $instruction->{address} + 1,
                opcode  => sprintf('%02x', $instruction->{operands}->[-1]),
            };
        } elsif ($instruction->{length} == 3) {
            my $operand = $instruction->{operands}->[-1];

            if ($operand =~ m/^[A-Z]+$/) {
                die "Unable to find $operand in the symbol table"
                    unless defined($symbol_table{$operand});
                $operand = $symbol_table{$operand};
            }

            push @expanded_instructions, {
                address => $instruction->{address} + 1,
                opcode  => sprintf('%02x', $operand & 0xff),
            }, {
                address => $instruction->{address} + 2,
                opcode  => sprintf('%02x', ($operand & 0xff00) >> 8),
            };
        }
    }

    @instructions = @expanded_instructions;
}

(my $program_name = basename($files[0])) =~ s/[\.-]/_/g;
printf("const uint16_t %s[] = {\n", $program_name);
foreach my $instruction (@instructions) {
    printf(
        "  0x%04x, 0x%02s, // %s\n",
        $instruction->{address},
        $instruction->{opcode},
        $instruction->{line} // '',
    );
}
print "};\n";

sub _read_op_table {
    my ($filename) = @_;
    my %op_table;

    open my $fh, '<', $filename;

    while (my $line = <$fh>) {
        chomp($line);
        $line =~ s/#.*//;
        next unless $line;

        my ($mnemonic, $operands, $opcode, $length) = $line =~ m/^([A-Z]+)\s([[:alnum:],]+)?\s+\|\s+([[:xdigit:]]{2})\s+\|\s+(\d)\s*$/;

        if ($line && !$mnemonic) {
            warn "unable to parse instruction from '$line'";
        } else {
            my $key = $operands ? join(' ', $mnemonic, $operands) : $mnemonic;
            $op_table{$key} = {
                mnemonic => $mnemonic,
                operands => $operands ? [split(/,/, $operands)] : [],
                opcode   => $opcode,
                length   => $length,
            };
        }
    }

    return %op_table;
}

sub _read_asm {
    my ($filename) = @_;
    my @instructions;

    open my $fh, '<', $filename;
    while (my $line = <$fh>) {
        chomp($line);
        $line =~ s/;.*//;
        $line =~ s/  */ /g;
        chomp($line);
        next unless $line;

        my ($label, $mnemonic, $operands) = $line =~ m/(.*:)?\s*(\w+)\s*(.*)?/;

        $label =~ s/:// if $label;

        my @operands = map { _parse_operand($_) } $operands ? split(/,/, $operands) : ();

        push @instructions, {
            label    => $label,
            mnemonic => $mnemonic,
            operands => \@operands,
            short    => $operands ? join(' ', $mnemonic, $operands) : $mnemonic,
            line     => $line,
        };
    };

    return @instructions;
}

sub _sanity_check_instructions {
    my @instructions = @_;

    die "First line does not have START label"
        unless $instructions[0]->{label} eq 'START';

    my %seen_labels;
    $seen_labels{$_}++ for grep { $_ } map { $_->{label} } @instructions;
    die "Label $_ appears multiple times"
        for grep { $seen_labels{$_} > 1 } sort keys %seen_labels;

    my @seen_mnemonics = uniq(map { $_->{mnemonic} } @instructions);
    my @valid_mnemonics = uniq(map { $_->{mnemonic} } values %op_table);

    foreach my $mnemonic (@seen_mnemonics) {
        die "Invalid mnemonic $mnemonic"
            unless any { $_ eq $mnemonic } @valid_mnemonics;
    }
}

sub _associate_instruction_with_op {
    my ($instruction) = @_;

    my $op;
    if ($op_table{$instruction->{short} // ''}) {
        $op = $op_table{$instruction->{short}};

    } else {
        my @possible_ops =
            sort
            grep { scalar(@{$op_table{$_}->{operands}}) == scalar(@{$instruction->{operands}}) }
            grep { $op_table{$_}->{mnemonic} eq $instruction->{mnemonic} } sort keys %op_table;

        if (scalar(@possible_ops) == 1) {
            $op = $op_table{$possible_ops[0]};
        } else {
            my $op_match = first { $op_table{$_}->{operands}->[0] eq $instruction->{operands}->[0] } @possible_ops;
            $op = $op_table{$op_match};
        }
    }

    die 'Unable to find opcode for '.$instruction->{line}
        unless $op;

    $instruction->{opcode} = $op->{opcode};
    $instruction->{length} = $op->{length};
}

sub _parse_operand {
    my ($operand) = @_;

    my ($root, $suffix) = $operand =~ m/^(.*)(.)$/;

    return $operand unless $root;

    if ($suffix eq 'H') {
        return hex($root);
    } elsif ($suffix eq 'D') {
        return $root;
    } elsif ($suffix eq 'Q') {
        return oct($root);
    } elsif ($suffix eq 'B') {
        return oct("0b$root");
    } else {
        return $operand;
    }
}
