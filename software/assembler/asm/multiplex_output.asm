; a larson scanner repeating a stored pattern

START:

        ; setup output
        LXI H,CSADDY
        MVI M,00000011B ; PA output


        ; set delay
        LXI B,10
        

LOOP:   LXI H,PAADDY
        MVI M,0
        LXI H,PBADDY
        MVI M,00000001B

        LXI H,PAADDY
        LDA PTN+0
        MOV M,A

        CALL DELAY

        LXI H,PAADDY
        MVI M,0
        LXI H,PBADDY
        MVI M,00000010B

        LXI H,PAADDY
        LDA PTN+1
        MOV M,A

        CALL DELAY

        LXI H,PAADDY
        MVI M,0
        LXI H,PBADDY
        MVI M,00000100B

        LXI H,PAADDY
        LDA PTN+2
        MOV M,A

        CALL DELAY

        JMP LOOP

PTN:    DB 00001101B,00000110B,00001010B
