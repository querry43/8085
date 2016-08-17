; test the 1D eval board under various states and
; and store the results in WORK.  The resulting
; values should be:
;   IVALID, IVALID, IVALID, IVALID
;    VALID, IVALID,  VALID, IVALID

START:
        ; ; _________
        ; CALL EVALRS

        ; ; place a white disk
        MVI B,WHITE
        CALL EVAL
        LXI H,WORK
        MOV M,C ; IVALID

        ; place a black disk
        MVI B,BLACK
        CALL EVAL
        LXI H,WORK+1
        MOV M,C ; IVALID


        ; _B_______
        CALL EVALRS
        LXI H,EVALWS+1
        MVI M,BLACK

        ; place a white disk
        MVI B,WHITE
        CALL EVAL
        LXI H,WORK+2
        MOV M,C ; IVALID

        ; place a black disk
        MVI B,BLACK
        CALL EVAL
        LXI H,WORK+3
        MOV M,C ; IVALID


        ; _BW______
        CALL EVALRS
        LXI H,EVALWS+1
        MVI M,BLACK

        LXI H,EVALWS+2
        MVI M,WHITE

        ; place a white disk
        MVI B,WHITE
        CALL EVAL
        LXI H,WORK+4
        MOV M,C ; VALID

        ; place a black disk
        MVI B,BLACK
        CALL EVAL
        LXI H,WORK+5
        MOV M,C ; IVALID


        ; _BBBBWB__
        CALL EVALRS
        LXI H,EVALWS+1
        MVI M,BLACK

        LXI H,EVALWS+2
        MVI M,BLACK

        LXI H,EVALWS+3
        MVI M,BLACK

        LXI H,EVALWS+4
        MVI M,BLACK

        LXI H,EVALWS+5
        MVI M,WHITE

        LXI H,EVALWS+6
        MVI M,BLACK

        ; place a white disk
        MVI B,WHITE
        CALL EVAL
        LXI H,WORK+6
        MOV M,C ; VALID

        ; place a black disk
        MVI B,BLACK
        CALL EVAL
        LXI H,WORK+7
        MOV M,C ; IVALID

        HLT

WORK:   DS 8
