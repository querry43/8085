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
   : ('CALL' immediate) # CALL
   | ('DCX' REGISTER) # DCX
   | 'HLT' # HLT
   | ('JMP' immediate) # JMP
   | ('JNZ' immediate) # JNZ
   | ('LXI' REGISTER ',' immediate) # LXI
   | ('MOV' REGISTER ',' REGISTER) # MOV
   | ('MVI' REGISTER ',' immediate) # MVI
   | 'NOP' # NOP
   | ('ORA' REGISTER) # ORA
   | ('POP' REGISTER) # POP
   | ('PUSH' REGISTER) # PUSH
   | 'RET' # RET
   | 'SIM' # SIM
   ;


REGISTER
   : 'A' | 'B' | 'C' | 'D' | 'H' | 'L' | 'M' | 'SP' | 'PSW'
   ;

labeloperand
   : LABEL
   ;

locationcounteroperand
   : '$'
   ;

immediate
   : hex
   | oct
   | bin
   | dec
   | chr
   | labeloperand
   | locationcounteroperand
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

COMMENT
   : ';' ~ [\r\n]* -> skip
   ;

WS
   : [ \t] -> skip
   ;
