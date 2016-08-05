START:  LXI H,9800H
        MVI M,00000001B ; PA output

        MVI A,1
        LXI H,9801H
        LXI B,2000H

FWD:    MOV M,A
        RLC
        CALL DELAY
        CPI 80H
        JNZ FWD

REV:    MOV M,A
        RRC
        CALL DELAY
        CPI 1H
        JNZ REV

        JMP FWD
