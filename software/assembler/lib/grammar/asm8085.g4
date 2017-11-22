// based on asm6502 grammar by Tom Everett, https://github.com/antlr/grammars-v4/blob/master/asm6502/asm6502.g4

grammar asm8085;

prog
   : (line? EOL) +
   ;

line
   : comment
   | operation
   | label
   ;

operation
   : label? (instruction | directive) comment?
   ;

label
   : LABEL ':'
   ;

comment
   : COMMENT
   ;

instruction
   : ('ACI'  expression)
   | ('ADC'  register)
   | ('ADD'  register)
   | ('ADI'  expression)
   | ('ANA'  register)
   | ('ANI'  expression)
   | ('CALL' expression)
   | ('CC'   expression)
   | ('CM'   expression)
   | ('CMA')
   | ('CMC')
   | ('CMP'  register)
   | ('CNC'  expression)
   | ('CNZ'  expression)
   | ('CP'   expression)
   | ('CPE'  expression)
   | ('CPI'  expression)
   | ('CPO'  expression)
   | ('CZ'   expression)
   | ('DAA')
   | ('DAD'  register)
   | ('DCR'  register)
   | ('DCX'  register)
   | ('DI')
   | ('EI')
   | ('HLT')
   | ('IN'   expression)
   | ('INR'  register)
   | ('INX'  register)
   | ('JC'   expression)
   | ('JM'   expression)
   | ('JMP'  expression)
   | ('JNC'  expression)
   | ('JNZ'  expression)
   | ('JP'   expression)
   | ('JPE'  expression)
   | ('JPO'  expression)
   | ('JZ'   expression)
   | ('LDA'  expression)
   | ('LDAX' register)
   | ('LHLD' expression)
   | ('LXI'  register ',' expression)
   | ('MOV'  register ',' register)
   | ('MVI'  register ',' expression)
   | ('NOP')
   | ('ORA'  register)
   | ('ORA'  expression)
   | ('OUT'  expression)
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
   | ('SBI'  expression)
   | ('SHLD' expression)
   | ('SIM')
   | ('SPHL')
   | ('STA'  expression)
   | ('STAX' register)
   | ('SUB'  register)
   | ('SUI'  expression)
   | ('XCHG')
   | ('XRA'  register)
   | ('XRI'  expression)
   | ('XTHL')
   ;

directive
   : ('DB'   expressionlist) # DB
   | ('DS'   expression) # DS
   | ('ORG'  expression) # ORG
   | (LABEL 'SET' expression) # SET
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

expressionlist
   : (expression ',' expressionlist)
   | expression
   ;

expression
   : (multexpression '+' expression) # Plus
   | (multexpression '-' expression) # Minus
   | multexpression # MultExpression
   ;

multexpression
   : (parenexpression '*' expression) # Mult
   | (parenexpression '/' expression) # Div
   | (parenexpression 'MOD' expression) # Mod
   | parenexpression # ParenExpression
   ;

parenexpression
   : ( '(' expression ')' )
   | immediate
   ;

immediate
   : hex
   | oct
   | bin
   | dec
   | str 
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

str
   : STR
   ;

STR
   : '\'' ~ [\']* '\''
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
