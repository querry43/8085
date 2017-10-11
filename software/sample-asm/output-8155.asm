        LXI SP , 8191
        JMP START

        ORG 44H
START:
        ; set PA as an output port
        LXI H,CSADDY
        MVI M,00000001B

        ; set PA output values
        LXI H,PAADDY
        MVI M,10101010B

        HLT
