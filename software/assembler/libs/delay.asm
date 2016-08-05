; put delay counter in register pair H

DELAY:  PUSH PSW
        PUSH B
DLOOP:  DCX B
        MVI A,0
        ORA C
        JNZ DLOOP
        ORA B
        JNZ DLOOP
        POP B
        POP PSW
        RET
