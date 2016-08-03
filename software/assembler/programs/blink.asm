START:  LXI H,FFFFH

        MVI A,01000000B
        SIM
        CALL DELAY

        MVI A,11000000B
        SIM
        CALL DELAY

        JMP START
