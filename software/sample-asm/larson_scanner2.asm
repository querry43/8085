; a larson scanner repeating a stored pattern
; for the 8155

        LXI SP , 8191
        JMP START

        ORG 44H
START:
        ; setup output
        LXI H,CSADDY
        MVI M,00000001B ; PA output
        LXI H,PAADDY

        ; set delay timer
        LXI B,2000H


BEGIN:  LXI D,PTN
LOOP:   LDAX D
        MOV M,A
        CALL DELAY
        INX D
        MOV A,E
        CPI PTNEND
        JZ BEGIN
        JMP LOOP

PTN:    DB 00000001B,00000010B,00000100B,00001000B,00010000B,00100000B,01000000B,10000000B
        DB 01000000B,00100000B,00010000B,00001000B,00000100B,00000010B
PTNEND:
