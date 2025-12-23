        .title    Set SOD
        .sbttl    Test the cpu and rom by setting the serial out line high
        .8085

        ; assemble with as8085 -o 00-sod-high.asm
        ; link with aslink -i 00-sod-high.rel
        ; program with minipro -p M48Z02 -w 00-sod-high.hex -s --format ihex
        ; dump with minipro -p M48Z02 -r - | hexdump -C

START:  MVI A,#0xC0     ; 00111110 11000000, 3e c0
                        ; A = [sod, sde, xxx, r7.5, mse, m6.5, m6.5, m5.5]
        SIM             ; 00110000, 30
        HLT             ; 01110110, 76
