        .title    Test Banking
        .sbttl    Replace the ROM with RAM, then read and write the RAM
        .8085

        ; this program copies a SOD blink program to ram then runs that program
        ; from ram.  the ram shadows rom so all rom writes in the rom address
        ; range go to ram.  before blinking, it also writes to and then reads
        ; from address 0x00 which only works if rom is at 0x00.  this program
        ; should work if ram is 2k and repeats across the entire address range.

        ; assemble with as8085 -o 03-bank-rom-ram.asm
        ; link with aslink -i -g stack=0xfff 03-bank-rom-ram.rel
        ; program with minipro -p M48Z02 -w 03-bank-rom-ram.hex -s --format ihex
        ; dump with minipro -p M48Z02 -r - | hexdump -C

        .globl stack

        prog = 0x100    ; the code to write to and run from ram
        start = 0x200   ; the code which copies to ram

        LXI SP,stack
        JMP START

        ;
        ; this code is copied to RAM and executed from there
        ; all of the jumps are relative to the target memory address
        ;
        .area prog (abs)
        .org prog

PROG:
        ; swap rom out and ram in
        MVI A,#0x01
        OUT #0x00

        ; ram now starts at 0x00, let's test that
        MVI B,#0xf0
        LXI H,0x00
        MOV M,B
        MOV A,M
        CMP B
        JZ PLOOP

        ; if we get here, it means the ram write failed
        HLT

        ; loop blinkning SOD
PLOOP:  MVI A,#0xC0
        SIM
        LXI B,#0x2000
        CALL DELAY

        MVI A,#0x40
        SIM
        LXI B,#0x2000
        CALL DELAY

        JMP PLOOP

        ; spin delay, count down from register pair B
DELAY:  PUSH PSW
        PUSH B
DLOOP:  DCX B       ; decrement B register pair
        MOV A,B
        ORA C
        JNZ DLOOP
        POP B       ; only get here if the register pair is 0
        POP PSW
        RET


        ;
        ; this code copies the above program to ram and executes
        ;
        .area start (abs)
        .org start
START:
        ; copy PROG to ram
        MVI C,0x33      ; program length
        LXI H,PROG      ; program address
        LXI D,PROG      ; target address
        CALL CPLOOP

        ; jump to the program in RAM
        JMP PROG

CPLOOP: MOV A,M
        STAX D
        INX H
        INX D
        DCR C
        JNZ CPLOOP
        RET
