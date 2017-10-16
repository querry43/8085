; a larson scanner repeating a stored pattern
; for the 8155

        LXI SP , 8191
        JMP START

        ORG 44H
START:
        ; configure ports
        LXI H,CSADDY
        MVI M,00000011B


BEGIN:  LXI D,PTN

LOOP:
        LXI H,PCADDY    ; is the button pressed?
        MOV A,M
        ANI 1
        CPI 0
        CZ BTN

        LDAX D          ; write first byte to B port and second byte to A port
        LXI H,PBADDY
        MOV M,A
        INX D

        LDAX D
        LXI H,PAADDY
        MOV M,A
        INX D

        CALL LDELAY

        MOV A,E         ; start over if at end of a-pattern
        CPI PTNEND
        JZ BEGIN
        JMP LOOP


BTN:
        LXI H,PCADDY    ; is the button pressed?
        MOV A,M
        ANI 1
        CPI 1
        RZ

        PUSH D
        INX D
        LDAX D
        CPI 1
        CZ WIN
        POP D

        JMP BTN

WIN:    
        MVI A,FFH
        LXI H,PBADDY
        MOV M,A

        LXI H,PAADDY
        MOV M,A

        RET


          ; port-B    port-A
PTN:    DB 00000000B,00000001B
        DB 00000000B,00000010B
        DB 00000000B,00000100B
        DB 00000000B,00001000B
        DB 00000000B,00010000B
        DB 00000000B,00100000B
        DB 00000000B,01000000B
        DB 00000000B,10000000B
        DB 00000001B,00000000B
        DB 00000010B,00000000B
        DB 00000001B,00000000B
        DB 00000000B,10000000B
        DB 00000000B,01000000B
        DB 00000000B,00100000B
        DB 00000000B,00010000B
        DB 00000000B,00001000B
        DB 00000000B,00000100B
        DB 00000000B,00000010B

PTNEND: NOP

LDELAY: PUSH B
        LXI B,2000H
        CALL DELAY
        POP B
        RET
