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
   : NAME ':'
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

REGISTERPAIR
   : 'B' | 'D' | 'H' | 'SPI'
   ;

REGISTER
   : 'A' | 'B' | 'C' | 'D' | 'H' | 'L' | 'M'
   ;

labeloperand
   : NAME
   ;

call
   : CALL (immediate | labeloperand)
   ;

CALL
   : 'CALL'
   ;

jmp
   : JMP (immediate | labeloperand)
   ;

JMP
   : 'JMP'
   ;

lxi
   : LXI REGISTERPAIR ',' immediate
   ;

LXI
   : 'LXI'
   ;

mov
   : MOV REGISTER ',' REGISTER
   ;

MOV
   : 'MOV'
   ;

mvi
   : MVI REGISTER ',' immediate
   ;

MVI
   : 'MVI'
   ;

nop
   : NOP
   ;

NOP
   : 'NOP'
   ;

sim
   : SIM
   ;

SIM
   : 'SIM'
   ;

immediate
	 : hex
	 | oct
   | bin
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

EOL
   : '\r'? '\n'
   ;

NAME
   : [a-zA-Z] [a-zA-Z0-9."]*
   ;

COMMENT
   : ';' ~ [\r\n]* -> skip
   ;

WS
   : [ \t] -> skip
   ;
