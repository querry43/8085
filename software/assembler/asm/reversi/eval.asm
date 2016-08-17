; A one dimensional representation of the board.
; Offset 0 is the play position and the other offsets
; represent a single ray from the play position in
; any one of the 8 directions.  Offset 9 is always
; BLANK for loop end conditions.
EVALWS: DS 9

; Validity constants
        VALID SET 1
        IVALID SET 0

; Load EVALWS from the BOARD, starting at position x, y stored
; in D, E.  Each subsequent position is calulated by adding
; the values in B, C to D, E.  Ex: 1,0 is right, -1,-1 is
; left down.
LOADWS: PUSH PSW
        PUSH H
        PUSH B
        PUSH D

        CALL EVALRS

        LXI H,EVALWS

        ; copy from board
L4:     PUSH D
        CALL TILEV
        MOV M,E
        POP D

        ; increment and test position
        MOV A,D
        ADD B
        CPI 8
        JZ END
        CPI FFH
        JZ END
        MOV D,A

        MOV A,E
        ADD C
        CPI 8
        JZ END
        CPI FFH
        JZ END
        MOV E,A

        INX H

        JMP L4

END:    POP D
        POP B
        POP H
        POP PSW
        RET

; Reset EVALWS with all BLANK
EVALRS: PUSH H
        PUSH PSW

        ; load begin address to H and end address to A
        LXI H,EVALWS
        MOV A,L
        ADI 9

L3:     MVI M,BLANK
        INX H
        CMP L
        JNZ L3

        POP PSW
        POP H
        RET


; Evaluate the contents of EVALWS.
; B is the player color.
; C is the result which is either VALID or IVALID
EVAL:   PUSH H
        PUSH PSW

        ; assume invalid
        MVI C,IVALID

        ; test if play tile is available
        LXI H,EVALWS
        MOV A,M
        CPI BLANK
        JNZ INVLD

        ; look for opponent tile in next position
        INX H
        MOV A,M
        CPI BLANK
        JZ INVLD
        CMP B
        JZ INVLD

        ; look for player tile or opponent tile until BLANK
L2:     INX H
        MOV A,M
        CPI BLANK
        JZ INVLD
        CMP B
        JNZ L2

        ; valid!
        MVI C,VALID

INVLD:  POP PSW
        POP H
        RET
