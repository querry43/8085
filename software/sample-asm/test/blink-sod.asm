        LXI SP , 8191
        JMP START

        ORG 44H
START:  LXI B,FFFFH

        MVI A,01000000B
        SIM
        CALL DELAY
        CALL DELAY

        MVI A,11000000B
        SIM
        CALL DELAY
        CALL DELAY

        JMP START
