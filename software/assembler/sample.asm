        .title    Set SOD
        .sbttl    Test the cpu and rom by setting the serial out line high
        .8085

START:  MVI A,#0xC0     ; 00111110 11000000, 3e c0
        SIM             ; 00110000, 30
        HLT             ; 01110110, 76
