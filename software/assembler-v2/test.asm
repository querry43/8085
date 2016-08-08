; test comment
 ; test comment

NOWHERE: ; a label without an instruction

; a basic blink loop
START:  LXI B,FFFFH

LOOP:   MVI A,01000000B ; light off
        SIM
        CALL DELAY

        MVI A,11000000B ; light on
        SIM
        CALL DELAY

        JMP LOOP

; stack pointer and program counter manipulation
        LXI SP,$

; numerical immediates
        MVI A,10B
        MVI A,10Q
        MVI A,10H
        MVI A,10D
        MVI A,10

; but can i math?
        LXI SP,$+1
