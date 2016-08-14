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
        INX H


        HLT


WORK:   DS 8
