; output CS is 1001_1000_0000_0000

START:  LXI H,CSADDY
        MVI M,00000001B ; PA output

        LXI H,PAADDY
        MVI M,10101010B ; PA values

        HLT
