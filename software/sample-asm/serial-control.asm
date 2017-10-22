; Thoughts:
;  * the usart appears to remain in the un-initialized/idle state, all outputs seem consistent with this
;  * the cpu has not been tested since swapping out the 8155 oi ports
;  * the usart seems kinda warm for something that is idle
;  * it is hard to tell if the correct data is getting to it, address bus seems to remain high-impedance
;
; Next steps:
;  * scope the CS pin and WR pin, does it get selected properly?
;  * write then read the state of the usart, display it on the io ports
;  * re-test the io ports


        LXI SP , 8191
        JMP START

        ORG 44H
START:
        ; A15 A14 A13 A12 A11
        ;  1   1   1   1   1   X   X   X = F800 = Command
        ;  1   1   1   1   0   X   X   X = F800 = Data
        ; same address as the io ports for now
        LXI H,F800H

        ; worst-case initialize
        MVI M,00H
        MVI M,00H
        MVI M,00H
        MVI M,40H

        ; mode command
        ; 01 stop bits
        ; 00 parity
        ; 11 8-bit
        ; 01 baud fctor
        MVI M,01001101B

        ; control command
        ; 0 hunt
        ; 0 reset
        ; 1 RTS (test)
        ; 1 error reset
        ; 0 normal operation
        ; 0 receive disable
        ; 1 DTR (test)
        ; 1 transmit enable
        MVI M,00110011B
        HLT

        ; just send some junk data a bunch
        LXI H,F000H
LOOP:   MVI M,01010101B
        JMP LOOP

        HLT
