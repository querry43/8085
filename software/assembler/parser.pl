#!/usr/bin/perl

use warnings;
use strict;
use Parse::RecDescent;
use English qw/ -no_match_vars /;

use Data::Dumper;

$::RD_ERRORS = 1;
$::RD_WARN = 1;
$::RD_HINT = 1;
#$::RD_TRACE = 1;

my $grammar = q{
    startrule : program
    program : line(s?) eof
        { $return = $item[1] }

    # lines with only comments don't work, why?
    line : <skip: qr/[ \t]*/> instruction(?) comment(?) newline
        { $return = $item[2]->[0] }

    instruction : label(?) ( mvi | lxi | db )
        { $return = { label => $item[1]->[0], %{$item[2]} } }
        | <error>

    mvi : 'MVI' register ',' immediate
        { $return = { instruction => $item[1], operands => [$item[2], $item[4]] } }
    lxi : 'LXI' register_pair ',' immediate
        { $return = { instruction => $item[1], operands => [$item[2], $item[4]] } }

    db : 'DB'
        { $return = { instruction => $item[1], operands => [] } }

    data : 'DATA' immediate
        { $return = { instruction => $item[1], operands => [$item[2]] } }

    register : ( 'A' | 'B' | 'C' | 'D' | 'H' | 'L' | 'M' )
        { $return = { type => $item[0], value => $item[1] } }
    register_pair : ( 'B' | 'D' | 'H' )
        { $return = { type => $item[0], value => $item[1] } }

    immediate : hex | oct | bin | dec

    hex : /[[:xdigit:]]+/ 'H'
        { $return = { type => $item[0], value => $item[1] } }
    oct : /[0-7]+/ 'Q'
        { $return = { type => $item[0], value => $item[1] } }
    bin : /[01]+/ 'B'
        { $return = { type => $item[0], value => $item[1] } }
    dec : ( /\d+/ 'D' | /\d+/ )
        { $return = { type => $item[0], value => $item[1] } }

    label : /[a-zA-Z0-9]{2,}/ ':'
        { $return = $item[1] }

    newline : /\n+/

    comment : /;[^\n]*/

    eof : /\Z/
};

my $parser = Parse::RecDescent->new($grammar);

my @files = @ARGV;
foreach my $file (@files) {
    local $INPUT_RECORD_SEPARATOR;
    open my $fh, '<', $file;
    my $contents = <$fh>;
    print "$contents";
    my $asm = $parser->startrule($contents);
    print Dumper $asm;
}
