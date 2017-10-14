
const uint16_t larson_scanner2_asm_h[] = {

// Symbol Table:
//   BEGIN:  0x0049
//   CSADDY: 0xff80
//   DELAY:  0x0092
//   DLOOP:  0x0094
//   LDELAY: 0x0089
//   LOOP:   0x004c
//   PAADDY: 0xff81
//   PBADDY: 0xff82
//   PCADDY: 0xff83
//   PTN:    0x0064
//   PTNEND: 0x0088
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
0x0047, 0x36, //         MVI M , 00000011B           larson_scanner2.asm:11
0x0048, 0x03, //
0x0049, 0x11, // BEGIN:  LXI D , PTN                 larson_scanner2.asm:14
0x004a, 0x64, //
0x004b, 0x00, //
0x004c, 0x1a, // LOOP:   LDAX D                      larson_scanner2.asm:16
0x004d, 0x21, //         LXI H , PBADDY              larson_scanner2.asm:17
0x004e, 0x82, //
0x004f, 0xff, //
0x0050, 0x77, //         MOV M , A                   larson_scanner2.asm:18
0x0051, 0x13, //         INX D                       larson_scanner2.asm:19
0x0052, 0x1a, //         LDAX D                      larson_scanner2.asm:21
0x0053, 0x21, //         LXI H , PAADDY              larson_scanner2.asm:22
0x0054, 0x81, //
0x0055, 0xff, //
0x0056, 0x77, //         MOV M , A                   larson_scanner2.asm:23
0x0057, 0x13, //         INX D                       larson_scanner2.asm:24
0x0058, 0xcd, //         CALL LDELAY                 larson_scanner2.asm:26
0x0059, 0x89, //
0x005a, 0x00, //
0x005b, 0x7b, //         MOV A , E                   larson_scanner2.asm:28
0x005c, 0xfe, //         CPI PTNEND                  larson_scanner2.asm:29
0x005d, 0x88, //
0x005e, 0xca, //         JZ BEGIN                    larson_scanner2.asm:30
0x005f, 0x49, //
0x0060, 0x00, //
0x0061, 0xc3, //         JMP LOOP                    larson_scanner2.asm:31
0x0062, 0x4c, //
0x0063, 0x00, //
0x0064, 0x00, // PTN:    DB 00000000B,00000001B      larson_scanner2.asm:34
0x0065, 0x01, //
0x0066, 0x00, //         DB 00000000B,00000010B      larson_scanner2.asm:35
0x0067, 0x02, //
0x0068, 0x00, //         DB 00000000B,00000100B      larson_scanner2.asm:36
0x0069, 0x04, //
0x006a, 0x00, //         DB 00000000B,00001000B      larson_scanner2.asm:37
0x006b, 0x08, //
0x006c, 0x00, //         DB 00000000B,00010000B      larson_scanner2.asm:38
0x006d, 0x10, //
0x006e, 0x00, //         DB 00000000B,00100000B      larson_scanner2.asm:39
0x006f, 0x20, //
0x0070, 0x00, //         DB 00000000B,01000000B      larson_scanner2.asm:40
0x0071, 0x40, //
0x0072, 0x00, //         DB 00000000B,10000000B      larson_scanner2.asm:41
0x0073, 0x80, //
0x0074, 0x01, //         DB 00000001B,00000000B      larson_scanner2.asm:42
0x0075, 0x00, //
0x0076, 0x02, //         DB 00000010B,00000000B      larson_scanner2.asm:43
0x0077, 0x00, //
0x0078, 0x01, //         DB 00000001B,00000000B      larson_scanner2.asm:44
0x0079, 0x00, //
0x007a, 0x00, //         DB 00000000B,10000000B      larson_scanner2.asm:45
0x007b, 0x80, //
0x007c, 0x00, //         DB 00000000B,01000000B      larson_scanner2.asm:46
0x007d, 0x40, //
0x007e, 0x00, //         DB 00000000B,00100000B      larson_scanner2.asm:47
0x007f, 0x20, //
0x0080, 0x00, //         DB 00000000B,00010000B      larson_scanner2.asm:48
0x0081, 0x10, //
0x0082, 0x00, //         DB 00000000B,00001000B      larson_scanner2.asm:49
0x0083, 0x08, //
0x0084, 0x00, //         DB 00000000B,00000100B      larson_scanner2.asm:50
0x0085, 0x04, //
0x0086, 0x00, //         DB 00000000B,00000010B      larson_scanner2.asm:51
0x0087, 0x02, //
0x0088, 0x00, // PTNEND: NOP                         larson_scanner2.asm:53
0x0089, 0xc5, // LDELAY: PUSH B                      larson_scanner2.asm:55
0x008a, 0x01, //         LXI B , 2000H               larson_scanner2.asm:56
0x008b, 0x00, //
0x008c, 0x20, //
0x008d, 0xcd, //         CALL DELAY                  larson_scanner2.asm:57
0x008e, 0x92, //
0x008f, 0x00, //
0x0090, 0xc1, //         POP B                       larson_scanner2.asm:58
0x0091, 0xc9, //         RET                         larson_scanner2.asm:59
0x0092, 0xf5, // DELAY:  PUSH PSW                    libs/delay.asm:3
0x0093, 0xc5, //         PUSH B                      libs/delay.asm:4
0x0094, 0x0b, // DLOOP:  DCX B                       libs/delay.asm:5
0x0095, 0x3e, //         MVI A , 0                   libs/delay.asm:6
0x0096, 0x00, //
0x0097, 0xb1, //         ORA C                       libs/delay.asm:7
0x0098, 0xc2, //         JNZ DLOOP                   libs/delay.asm:8
0x0099, 0x94, //
0x009a, 0x00, //
0x009b, 0xb0, //         ORA B                       libs/delay.asm:9
0x009c, 0xc2, //         JNZ DLOOP                   libs/delay.asm:10
0x009d, 0x94, //
0x009e, 0x00, //
0x009f, 0xc1, //         POP B                       libs/delay.asm:11
0x00a0, 0xf1, //         POP PSW                     libs/delay.asm:12
0x00a1, 0xc9, //         RET                         libs/delay.asm:13

};


