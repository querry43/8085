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
   : label? opcode argumentlist? comment?
   ;

label
   : name ':'
   ;

argumentlist
   : argument (',' argumentlist)?
   ;

argument
   : prefix? (number | name | string | '*') (('+' | '-') number)?
   | '(' argument ')'
   ;

prefix
   : '#'
   ;

string
   : STRING
   ;

name
   : NAME
   ;

number
   : NUMBER
   ;

comment
   : COMMENT
   ;

opcode
   : MOV
   ;


fragment A
   : ('a' | 'A')
   ;


fragment B
   : ('b' | 'B')
   ;


fragment C
   : ('c' | 'C')
   ;


fragment D
   : ('d' | 'D')
   ;


fragment E
   : ('e' | 'E')
   ;


fragment F
   : ('f' | 'F')
   ;


fragment G
   : ('g' | 'G')
   ;


fragment H
   : ('h' | 'H')
   ;


fragment I
   : ('i' | 'I')
   ;


fragment J
   : ('j' | 'J')
   ;


fragment K
   : ('k' | 'K')
   ;


fragment L
   : ('l' | 'L')
   ;


fragment M
   : ('m' | 'M')
   ;


fragment N
   : ('n' | 'N')
   ;


fragment O
   : ('o' | 'O')
   ;


fragment P
   : ('p' | 'P')
   ;


fragment Q
   : ('q' | 'Q')
   ;


fragment R
   : ('r' | 'R')
   ;


fragment S
   : ('s' | 'S')
   ;


fragment T
   : ('t' | 'T')
   ;


fragment U
   : ('u' | 'U')
   ;


fragment V
   : ('v' | 'V')
   ;


fragment W
   : ('w' | 'W')
   ;


fragment X
   : ('x' | 'X')
   ;


fragment Y
   : ('y' | 'Y')
   ;


fragment Z
   : ('z' | 'Z')
   ;

/*
* opcodes
*/

MOV
   : M O V
   ;


NAME
   : [a-zA-Z] [a-zA-Z0-9."]*
   ;


NUMBER
   : '$'? [0-9a-fA-F] +
   ;


COMMENT
   : ';' ~ [\r\n]* -> skip
   ;


STRING
   : '"' ~ ["]* '"'
   ;


EOL
   : '\r'? '\n'
   ;


WS
   : [ \t] -> skip
   ;
