; for the 8155

        LXI SP , 8191
        JMP START

        ORG 44H
START:  LXI H,CSADDY
        MVI M,00000001B ; PA output

        MVI A,1
        LXI H,PAADDY

        ; set delay timer
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
