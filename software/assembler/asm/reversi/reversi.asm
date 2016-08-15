START:
        CALL RESET

        ; this breaks everything, why?
        ; LXI D,0303H
        ; CALL TILEA
        ; XCHG
        ; MVI M,WHITE

        ; black selects 2,3 (valid)
        MVI B,BLACK ; our color
        MVI C,WHITE ; opponent tile
        LXI D,0203H
        PUSH D

        ; test if tile available
        CALL TILEV
        MOV A,E
        CPI BLANK
        JNZ INVLD

        ; recall user selection
        POP D
        PUSH D

        ; look for opponent tile to right
        ; are there enough tiles to the right?
        MVI A,6
        CMP D
        JZ INVLD
        JC INVLD

        ; is the next tile to the right an opponent tile?
        INR D
        CALL TILEV
        MOV A,E
        XRA C
        CPI 0
        JNZ INVLD ; did not find opponent tile

VLD:    LXI H,WORK
        MVI M,01B
        JMP OUTPUT

INVLD:  LXI H,WORK
        MVI M,10B
        JMP OUTPUT

OUTPUT: LXI H,CSADDY
        MVI M,00000001B ; PA output

        LXI H,WORK
        MOV B,M
        LXI H,PAADDY
        MOV M,B
        HLT

WORK:   DS 8
