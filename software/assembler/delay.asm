; put delay counter in register pair H

DELAY:  PUSH PSW
        PUSH H
DLOOP:  DCX H
        MVI A,0
        ORA L
        JNZ DLOOP
        ORA H
        JNZ DLOOP
        POP H
        POP PSW
        RET
