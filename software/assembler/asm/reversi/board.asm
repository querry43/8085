; Store the board, one byte for each tile
BOARD:  DS 64


; Tile value constants
        BLANK SET 10000000B
        WHITE SET 01B
        BLACK SET 10B


; Get the address for a tile.  The x, y coordinates are passed in D, E
; respectively and the resulting address is stored in pair DE
TILEAD: PUSH PSW
        PUSH H

        ; calculate offset A
        MOV A,E
        RLC
        RLC
        RLC
        ADD D

        ; sum address and offset
        LXI H,0
        MOV L,A
        LXI D,BOARD
        DAD D
        XCHG

        POP H
        POP PSW
        RET

; Get the value for a tile.  The x, y coordinates are passed in D, E
; respectively and the resulting value is stored in pair DE LSB
TILEV:  PUSH H

        CALL TILEAD
        XCHG
        LXI D,0
        MOV E,M

        POP H
        RET

; Reset the board to the starting position.
RESET:  PUSH PSW
        PUSH H

        LXI H,BOARD
        MOV A,L
        ADI 64

L1:     MVI M,BLANK
        INX H
        CMP L
        JNZ L1

        LXI H,BOARD+27
        MVI M,WHITE
        LXI H,BOARD+28
        MVI M,BLACK
        LXI H,BOARD+35
        MVI M,BLACK
        LXI H,BOARD+36
        MVI M,WHITE


        POP H
        POP PSW
        RET
