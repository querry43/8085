        .title    Blink SOD
        .sbttl    Test the cpu, rom, and ram by blinking the serial out line
        .8085

        ; assemble with as8085 -o 01-blink-sod.asm
        ; link with aslink -i -g stack=0xfff 01-blink-sod.rel
        ; program with minipro -p M48Z02 -w 01-blink-sod.hex -s --format ihex
        ; dump with minipro -p M48Z02 -r - | hexdump -C

        .globl stack

        LXI SP,stack
        LXI B,#0xFFFF

START:
        MVI A,#0xc0 ; sod on
        SIM
        CALL DELAY

        MVI A,#0x40 ; sod off
        SIM
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
