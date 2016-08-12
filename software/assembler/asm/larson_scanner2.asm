; memory range is 0077 to 0x1000

START:
        ; pointer
        LXI D,PTN

        ; setup output
        LXI H,9800H
        MVI M,00000001B ; PA output
        LXI H,9801H

        ; set delay timer
        LXI B,2000H

FWD:    LDAX D
        MOV M,A
        CALL DELAY
        INX D
        MOV A,E
        CPI 0074H ; should be PTN+7
        JNZ FWD

REV:    LDAX D
        MOV M,A
        CALL DELAY
        DCX D
        MOV A,E
        CPI PTN
        JNZ REV

        JMP FWD

PTN:    DB 00000001B,00000010B,00000100B,00001000B,00010000B,00100000B,01000000B,10000000B
