; test comment
 ; test comment

START:  LXI B,FFFFH

        MVI A,01000000B ; light off
        SIM
        CALL DELAY

        MVI A,11000000B ; light on
        SIM
        CALL DELAY

        JMP START

