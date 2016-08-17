; A one dimensional representation of the board.
; Offset 0 is the play position and the other offsets
; represent a single ray from the play position in
; any one of the 8 directions.  Offset 9 is always
; BLANK for loop end conditions.
EVALWS: DS 9

; Validity constants
        VALID SET 1
        IVALID SET 0


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
