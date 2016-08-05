; output CS is 1001_1000_0000_0000

START:  LXI H,9800H
        MVI M,00000001B ; PA output

        LXI H,9801H
        MVI M,10101010B ; PA values

        HLT
