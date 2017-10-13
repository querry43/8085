
const uint16_t larson_scanner2_asm_h[] = {

// Symbol Table:
//   BEGIN:  0x004f
//   CSADDY: 0xff80
//   DELAY:  0x006f
//   DLOOP:  0x0071
//   LOOP:   0x0052
//   PAADDY: 0xff81
//   PBADDY: 0xff82
//   PCADDY: 0xff83
//   PTN:    0x0061
//   PTNEND: 0x006f
//   START:  0x0044


0x0000, 0x31, //         LXI SP , 8191               larson_scanner2.asm:4
0x0001, 0xff, //
0x0002, 0x1f, //
0x0003, 0xc3, //         JMP START                   larson_scanner2.asm:5
0x0004, 0x44, //
0x0005, 0x00, //
0x0044, 0x21, //         LXI H , CSADDY              larson_scanner2.asm:10
0x0045, 0x80, //
0x0046, 0xff, //
0x0047, 0x36, //         MVI M , 00000001B           larson_scanner2.asm:11
0x0048, 0x01, //
0x0049, 0x21, //         LXI H , PAADDY              larson_scanner2.asm:12
0x004a, 0x81, //
0x004b, 0xff, //
0x004c, 0x01, //         LXI B , 2000H               larson_scanner2.asm:15
0x004d, 0x00, //
0x004e, 0x20, //
0x004f, 0x11, // BEGIN:  LXI D , PTN                 larson_scanner2.asm:18
0x0050, 0x61, //
0x0051, 0x00, //
0x0052, 0x1a, // LOOP:   LDAX D                      larson_scanner2.asm:19
0x0053, 0x77, //         MOV M , A                   larson_scanner2.asm:20
0x0054, 0xcd, //         CALL DELAY                  larson_scanner2.asm:21
0x0055, 0x6f, //
0x0056, 0x00, //
0x0057, 0x13, //         INX D                       larson_scanner2.asm:22
0x0058, 0x7b, //         MOV A , E                   larson_scanner2.asm:23
0x0059, 0xfe, //         CPI PTNEND                  larson_scanner2.asm:24
0x005a, 0x6f, //
0x005b, 0xca, //         JZ BEGIN                    larson_scanner2.asm:25
0x005c, 0x4f, //
0x005d, 0x00, //
0x005e, 0xc3, //         JMP LOOP                    larson_scanner2.asm:26
0x005f, 0x52, //
0x0060, 0x00, //
0x0061, 0x01, // PTN:    DB 00000001B,00000010B,0... larson_scanner2.asm:28
0x0062, 0x02, //
0x0063, 0x04, //
0x0064, 0x08, //
0x0065, 0x10, //
0x0066, 0x20, //
0x0067, 0x40, //
0x0068, 0x80, //
0x0069, 0x40, //         DB 01000000B,00100000B,0... larson_scanner2.asm:29
0x006a, 0x20, //
0x006b, 0x10, //
0x006c, 0x08, //
0x006d, 0x04, //
0x006e, 0x02, //
0x006f, 0xf5, // DELAY:  PUSH PSW                    libs/delay.asm:3
0x0070, 0xc5, //         PUSH B                      libs/delay.asm:4
0x0071, 0x0b, // DLOOP:  DCX B                       libs/delay.asm:5
0x0072, 0x3e, //         MVI A , 0                   libs/delay.asm:6
0x0073, 0x00, //
0x0074, 0xb1, //         ORA C                       libs/delay.asm:7
0x0075, 0xc2, //         JNZ DLOOP                   libs/delay.asm:8
0x0076, 0x71, //
0x0077, 0x00, //
0x0078, 0xb0, //         ORA B                       libs/delay.asm:9
0x0079, 0xc2, //         JNZ DLOOP                   libs/delay.asm:10
0x007a, 0x71, //
0x007b, 0x00, //
0x007c, 0xc1, //         POP B                       libs/delay.asm:11
0x007d, 0xf1, //         POP PSW                     libs/delay.asm:12
0x007e, 0xc9, //         RET                         libs/delay.asm:13

};


