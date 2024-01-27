        .title    Write Control Register
        .sbttl    Test the cpu, rom, ram, and control register
        .8085

        ; assemble with as8085 -o 02-set-control-reg.asm
        ; link with aslink -i -g stack=0xfff 02-set-control-reg.rel
        ; program with minipro -p M48Z02 -w 02-set-control-reg.hex -s --format ihex
        ; dump with minipro -p M48Z02 -r - | hexdump -C

        .globl stack

        LXI SP,stack
        LXI B,#0x2000

START:
        ; bit 1 controls rom banking, if we set that high, the program will crash
        MVI A,#0x02
        OUT #0x00
        CALL DELAY

        MVI A,#0x00
        OUT #0x00
        CALL DELAY

        JMP START

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
