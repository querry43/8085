const uint16_t larson_scanner2_asm_h[] = {

0x0000, 0x31, //         LXI SP , 4095               preamble:1
0x0001, 0xff, //
0x0002, 0x0f, //
0x0003, 0xc3, //         JMP START                   preamble:2
0x0004, 0x44, //
0x0005, 0x00, //
0x0044, 0x21, //         LXI H , CSADDY              asm/larson_scanner2.asm:6
0x0045, 0x00, //
0x0046, 0x98, //
0x0047, 0x36, //         MVI M , 00000001B           asm/larson_scanner2.asm:7
0x0048, 0x01, //
0x0049, 0x21, //         LXI H , PAADDY              asm/larson_scanner2.asm:8
0x004a, 0x01, //
0x004b, 0x98, //
0x004c, 0x01, //         LXI B , 2000H               asm/larson_scanner2.asm:11
0x004d, 0x00, //
0x004e, 0x20, //
0x004f, 0x11, // BEGIN:  LXI D , PTN                 asm/larson_scanner2.asm:14
0x0050, 0x61, //
0x0051, 0x00, //
0x0052, 0x1a, // LOOP:   LDAX D                      asm/larson_scanner2.asm:15
0x0053, 0x77, //         MOV M , A                   asm/larson_scanner2.asm:16
0x0054, 0xcd, //         CALL DELAY                  asm/larson_scanner2.asm:17
0x0055, 0x6f, //
0x0056, 0x00, //
0x0057, 0x13, //         INX D                       asm/larson_scanner2.asm:18
0x0058, 0x7b, //         MOV A , E                   asm/larson_scanner2.asm:19
0x0059, 0xfe, //         CPI PTNEND                  asm/larson_scanner2.asm:20
0x005a, 0x6f, //
0x005b, 0xca, //         JZ BEGIN                    asm/larson_scanner2.asm:21
0x005c, 0x4f, //
0x005d, 0x00, //
0x005e, 0xc3, //         JMP LOOP                    asm/larson_scanner2.asm:22
0x005f, 0x52, //
0x0060, 0x00, //
0x0061, 0x01, // PTN:    DB 00000001B,00000010B,0... asm/larson_scanner2.asm:24
0x0062, 0x02, //
0x0063, 0x04, //
0x0064, 0x08, //
0x0065, 0x10, //
0x0066, 0x20, //
0x0067, 0x40, //
0x0068, 0x80, //
0x0069, 0x40, //         DB 01000000B,00100000B,0... asm/larson_scanner2.asm:25
0x006a, 0x20, //
0x006b, 0x10, //
0x006c, 0x08, //
0x006d, 0x04, //
0x006e, 0x02, //
0x006f, 0xf5, // DELAY:  PUSH PSW                    asm/libs/delay.asm:3
0x0070, 0xc5, //         PUSH B                      asm/libs/delay.asm:4
0x0071, 0x0b, // DLOOP:  DCX B                       asm/libs/delay.asm:5
0x0072, 0x3e, //         MVI A , 0                   asm/libs/delay.asm:6
0x0073, 0x00, //
0x0074, 0xb1, //         ORA C                       asm/libs/delay.asm:7
0x0075, 0xc2, //         JNZ DLOOP                   asm/libs/delay.asm:8
0x0076, 0x71, //
0x0077, 0x00, //
0x0078, 0xb0, //         ORA B                       asm/libs/delay.asm:9
0x0079, 0xc2, //         JNZ DLOOP                   asm/libs/delay.asm:10
0x007a, 0x71, //
0x007b, 0x00, //
0x007c, 0xc1, //         POP B                       asm/libs/delay.asm:11
0x007d, 0xf1, //         POP PSW                     asm/libs/delay.asm:12
0x007e, 0xc9, //         RET                         asm/libs/delay.asm:13

};

