DELAY:  ; a label without an instruction

START:  MOV A,B

LOOP:   MOV B,A
        CALL DELAY
        JMP LOOP
