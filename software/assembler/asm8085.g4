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
   : ('ACI'  immediate)
   | ('ADC'  register)
   | ('ADD'  register)
   | ('ADI'  immediate)
   | ('ANA'  register)
   | ('ANI'  immediate)
   | ('CALL' immediate)
   | ('CC'   immediate)
   | ('CM'   immediate)
   | ('CMA')
   | ('CMC')
   | ('CMP'  register)
   | ('CNC'  immediate)
   | ('CNZ'  immediate)
   | ('CP'   immediate)
   | ('CPE'  immediate)
   | ('CPI'  immediate)
   | ('CPO'  immediate)
   | ('CZ'   immediate)
   | ('DAA')
   | ('DAD'  register)
   | ('DCR'  register)
   | ('DCX'  register)
   | ('DI')
   | ('DS'   immediate)
   | ('EI')
   | ('HLT')
   | ('IN'   immediate)
   | ('INR'  register)
   | ('INX'  register)
   | ('JM'   immediate)
   | ('JMP'  immediate)
   | ('JNC'  immediate)
   | ('JNZ'  immediate)
   | ('JP'   immediate)
   | ('JPE'  immediate)
   | ('JPO'  immediate)
   | ('JZ'   immediate)
   | ('LDA'  immediate)
   | ('LDAX' register)
   | ('LHLD' immediate)
   | ('LXI'  register ',' immediate)
   | ('MOV'  register ',' register)
   | ('MVI'  register ',' immediate)
   | ('NOP')
   | ('ORA'  register)
   | ('ORA'  immediate)
   | ('OUT'  immediate)
   | ('PCHL')
   | ('POP'  register)
   | ('PUSH' register)
   | ('RAL')
   | ('RAR')
   | ('RC')
   | ('RET')
   | ('RIM')
   | ('RLC')
   | ('RM')
   | ('RNC')
   | ('RNZ')
   | ('RP')
   | ('RPE')
   | ('RPO')
   | ('RRC')
   | ('RZ')
   | ('SBB'  register)
   | ('SBI'  immediate)
   | ('SHLD' immediate)
   | ('SIM')
   | ('SPHL')
   | ('STA'  immediate)
   | ('STAX' register)
   | ('SUB'  register)
   | ('SUI'  immediate)
   | ('XCHG')
   | ('XRA'  register)
   | ('XRI'  immediate)
   | ('XTHL')
   ;

register
   : REGISTER
   ;

REGISTER
   : 'A' | 'B' | 'C' | 'D' | 'E' | 'H' | 'L' | 'M' | 'SP' | 'PSW'
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
