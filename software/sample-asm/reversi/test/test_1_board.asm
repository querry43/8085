; test the board by resetting it to the initial state and
; querying for values across two rows, storing those values
; in WORK.  The resulting values should be:
;   BLANK, WHITE, BLACK, BLANK
;   BLANK, BLACK, WHITE, BLANK

START:
        CALL RESET

        LXI H,WORK

        LXI D,0203H
        CALL TILEV
        MOV M,E
        INX H

        LXI D,0303H
        CALL TILEV
        MOV M,E
        INX H

        LXI D,0403H
        CALL TILEV
        MOV M,E
        INX H

        LXI D,0503H
        CALL TILEV
        MOV M,E
        INX H

        LXI D,0204H
        CALL TILEV
        MOV M,E
        INX H

        LXI D,0304H
        CALL TILEV
        MOV M,E
        INX H

        LXI D,0404H
        CALL TILEV
        MOV M,E
        INX H

        LXI D,0504H
        CALL TILEV
        MOV M,E

        HLT

WORK:   DS 8
