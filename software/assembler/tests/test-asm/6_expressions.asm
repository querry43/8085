        ORG 600H
PLUS:   MVI A,1 + 1
        LXI SP,PLUS+2
        LXI SP,$+3
        MVI A,1+1+1

MINUS:  MVI A,5-4

MULT:   MVI A,5*2

DIV:    MVI A,10/5
        MVI A,10/4

; these all fail
MODS:   MVI A,10 MOD 5 ; = 0
        MVI A,10 MOD 4 ; = 2
        MVI A,10 MOD 3 ; = 1

PRECID: MVI A,3+4*2 ; = 11
        MVI A,16/8-2 ; = 0

PARENS: MVI A,(3+4)*2 ; = 14
        MVI A,16/(8-2) ; = 2
