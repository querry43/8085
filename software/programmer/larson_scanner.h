const uint16_t larson_scanner_asm_h[] = {

0x0000, 0x31, //         LXI SP , 4095               preamble:1
0x0001, 0xff, //
0x0002, 0x0f, //
0x0003, 0xc3, //         JMP START                   preamble:2
0x0004, 0x44, //
0x0005, 0x00, //
0x0044, 0x21, // START:  LXI H , CSADDY              asm/larson_scanner.asm:1
0x0045, 0x00, //
0x0046, 0x98, //
0x0047, 0x36, //         MVI M , 00000001B           asm/larson_scanner.asm:2
0x0048, 0x01, //
0x0049, 0x3e, //         MVI A , 1                   asm/larson_scanner.asm:4
0x004a, 0x01, //
0x004b, 0x21, //         LXI H , PAADDY              asm/larson_scanner.asm:5
0x004c, 0x01, //
0x004d, 0x98, //
0x004e, 0x01, //         LXI B , 2000H               asm/larson_scanner.asm:8
0x004f, 0x00, //
0x0050, 0x20, //
0x0051, 0x77, // FWD:    MOV M , A                   asm/larson_scanner.asm:10
0x0052, 0x07, //         RLC                         asm/larson_scanner.asm:11
0x0053, 0xcd, //         CALL DELAY                  asm/larson_scanner.asm:12
0x0054, 0x68, //
0x0055, 0x00, //
0x0056, 0xfe, //         CPI 80H                     asm/larson_scanner.asm:13
0x0057, 0x80, //
0x0058, 0xc2, //         JNZ FWD                     asm/larson_scanner.asm:14
0x0059, 0x51, //
0x005a, 0x00, //
0x005b, 0x77, // REV:    MOV M , A                   asm/larson_scanner.asm:16
0x005c, 0x0f, //         RRC                         asm/larson_scanner.asm:17
0x005d, 0xcd, //         CALL DELAY                  asm/larson_scanner.asm:18
0x005e, 0x68, //
0x005f, 0x00, //
0x0060, 0xfe, //         CPI 1H                      asm/larson_scanner.asm:19
0x0061, 0x01, //
0x0062, 0xc2, //         JNZ REV                     asm/larson_scanner.asm:20
0x0063, 0x5b, //
0x0064, 0x00, //
0x0065, 0xc3, //         JMP FWD                     asm/larson_scanner.asm:22
0x0066, 0x51, //
0x0067, 0x00, //
0x0068, 0xf5, // DELAY:  PUSH PSW                    asm/libs/delay.asm:3
0x0069, 0xc5, //         PUSH B                      asm/libs/delay.asm:4
0x006a, 0x0b, // DLOOP:  DCX B                       asm/libs/delay.asm:5
0x006b, 0x3e, //         MVI A , 0                   asm/libs/delay.asm:6
0x006c, 0x00, //
0x006d, 0xb1, //         ORA C                       asm/libs/delay.asm:7
0x006e, 0xc2, //         JNZ DLOOP                   asm/libs/delay.asm:8
0x006f, 0x6a, //
0x0070, 0x00, //
0x0071, 0xb0, //         ORA B                       asm/libs/delay.asm:9
0x0072, 0xc2, //         JNZ DLOOP                   asm/libs/delay.asm:10
0x0073, 0x6a, //
0x0074, 0x00, //
0x0075, 0xc1, //         POP B                       asm/libs/delay.asm:11
0x0076, 0xf1, //         POP PSW                     asm/libs/delay.asm:12
0x0077, 0xc9, //         RET                         asm/libs/delay.asm:13

};

