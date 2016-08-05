; memory range is 0077 to 0x1000

START:  LXI H,0500H ; write the pattern
        MVI M,00000001B
        LXI H,0501H
        MVI M,00000010B
        LXI H,0502H
        MVI M,00000100B
        LXI H,0503H
        MVI M,00001000B
        LXI H,0504H
        MVI M,00010000B
        LXI H,0505H
        MVI M,00100000B
        LXI H,0506H
        MVI M,01000000B
        LXI H,0507H
        MVI M,10000000B

        ; pointer
        LXI D,0500H

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
        CPI 07H
        JNZ FWD

REV:    LDAX D
        MOV M,A
        CALL DELAY
        DCX D
        MOV A,E
        CPI 00H
        JNZ REV

        JMP FWD




