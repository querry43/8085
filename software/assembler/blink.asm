START:  LXI H,FFFFH

        MVI A,01000000B
        SIM
        CALL DELAY

        MVI A,11000000B
        SIM
        CALL DELAY

        JMP START

DELAY:  PUSH PSW
        PUSH H
LOOP:   DCX H
        MVI A,0
        ORA L
        JNZ LOOP
        ORA H
        JNZ LOOP
        POP H
        POP PSW
        RET
