START:
        CALL RESET

        LXI D,0005H
        CALL TILEA
        XCHG
        MVI M,BLACK
        INX H
        MVI M,BLACK
        INX H
        MVI M,BLACK
        INX H
        MVI M,BLACK
        INX H
        MVI M,BLACK
        INX H
        MVI M,BLACK
        INX H
        MVI M,BLACK
        INX H
        MVI M,BLACK

        LXI D,0100H
        CALL TILEA
        XCHG
        MVI M,WHITE
        LXI D,8
        DAD D
        MVI M,WHITE
        LXI D,8
        DAD D
        MVI M,WHITE
        LXI D,8
        DAD D
        MVI M,WHITE
        LXI D,8
        DAD D
        MVI M,WHITE
        LXI D,8
        DAD D
        MVI M,WHITE
        LXI D,8
        DAD D
        MVI M,WHITE
        LXI D,8
        DAD D
        MVI M,WHITE

        ; +--------+
        ; |0W000000|
        ; |0W000000|
        ; |0W000000|
        ; |0W0WB000|
        ; |0W0BW000|
        ; |BWBBBBBB|
        ; |0W000000|
        ; |0W000000|
        ; +--------+

        LXI D,0000H ; position
        LXI B,0100H ; direction
        CALL LOADWS

        ; we need some tests here, but it looks like it might be working..

        HLT

WORK:   DS 8
