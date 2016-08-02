#!/usr/bin/perl

use warnings;
use strict;
use autodie;

use Data::Dumper;

use constant {
    START_ADDRESS => 0x44,
    MEM_SIZE      => 4096,
};

my %instruction_table = _read_instruction_table();
my %instruction_handlers = (
    'MVI' => sub { },
);
my @program = _parse_assembly();

# sanity checks
# - no duplicate labels
# - first line is labeled START
# - no labels are used undefined

# associate each line with an op, figure out command length
foreach my $line (@program) {
    my $code = $instruction_table{$line->{op}}
        // $instruction_table{$line->{op} . ' ' . ($line->{operands} // '')};
    $line->{code} = $code;
    $line->{command_length} = 1;
}

# add addresses
my %label_addresses;
{
    my $address = START_ADDRESS();
    foreach my $line (@program) {
        $line->{address} = $address;
        $label_addresses{$line->{label}} = $address
            if $line->{label};
        $address += $line->{command_length};
    }
}

# expand labels


foreach my $line (@program) {
    printf(
        "0x%02x 0x%02s ; %s %s\n",
        $line->{address},
        $line->{code} // '??',
        $line->{op},
        $line->{operands} // '',
    );
}

print Dumper \%label_addresses;

sub _read_instruction_table {
    my %instructions;

    open my $fh, '<', 'instructions.txt';
    while (my $line = <$fh>) {
        chomp($line);
        $line =~ s/#.*//;
        next unless $line;

        my ($code, $instruction) = $line =~ m/^([[:xdigit:]]{2}) (.*)$/;
        if ($line && !$instruction) {
            warn "unable to parse instruction from '$line'";
        } else {
            $instructions{$instruction} = $code;
        }
    }

    return %instructions;
}

sub _parse_assembly {
    my @program = (
        {op => 'LXI', operands => '10H'},
        {op => 'JMP', operands => 'START'},
    );

    open my $fh, '<', 'blink.asm';
    while (my $line = <$fh>) {
        chomp($line);
        $line =~ s/;.*//;
        $line =~ s/  */ /g;
        chomp($line);
        next unless $line;

        my ($label, $op, $operands) = $line =~ m/(.*:)?\s*(\w+)(\s+.*)?/;

        $operands =~ s/^ // if $operands;
        $label =~ s/:// if $label;

        push @program, {
            label    => $label,
            op       => $op,
            operands => $operands,
        };
    }

    return @program;
}
