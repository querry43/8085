// based on asm6502 grammar by Tom Everett, https://github.com/antlr/grammars-v4/blob/master/asm6502/asm6502.g4

grammar asm8085;

prog
   : (line? EOL) +
   ;

line
   : comment
   | instruction
   | label
   ;

instruction
   : label? operation comment?
   ;

label
   : LABEL ':'
   ;

comment
   : COMMENT
   ;

operation
   : call
   | jmp
   | lxi
   | mov
   | mvi
   | nop
   | sim
   ;

call
   : 'CALL' immediate
   ;

jmp
   : 'JMP' immediate
   ;

lxi
   : 'LXI' REGISTER ',' immediate
   ;

mov
   : 'MOV' REGISTER ',' REGISTER
   ;

mvi
   : 'MVI' REGISTER ',' immediate
   ;

nop
   : 'NOP'
   ;

sim
   : 'SIM'
   ;

REGISTER
   : 'A' | 'B' | 'C' | 'D' | 'H' | 'L' | 'M' | 'SP'
   ;

labeloperand
   : LABEL | LOCATIONCOUNTER
   ;

immediate
   : hex
   | oct
   | bin
   | dec
   | chr
   | labeloperand
   ;

hex
   : HEX
   ;

HEX
   : [0-9A-F]+ 'H'
   ;

oct
   : OCT
   ;

OCT
   : [0-7]+ 'Q'
   ;

bin
   : BIN
   ;

BIN
   : [01]+ 'B'
   ;

dec
   : DEC
   ;

DEC
   : ([0-9]+ 'D')
   | [0-9]+
   ;

chr
   : CHR
   ;

CHR
   : '\'' . '\''
   ;

EOL
   : '\r'? '\n'
   ;

LABEL
   : [A-Z] [A-Z0-9]*
   ;

LOCATIONCOUNTER
   : '$'
   ;

COMMENT
   : ';' ~ [\r\n]* -> skip
   ;

WS
   : [ \t] -> skip
   ;
