; output CS is 1001_1000_0000_0000

START:  MVI H,98H
        MVI L,00H
        MVI M,00000001B ; PA output

        MVI H,98H
        MVI L,01H
        MVI M,10101010B ; PA values

        HLT
