
const uint16_t larson_scanner2_asm_h[] = {

// Symbol Table:
//   BEGIN:  0x004c
//   CSADDY: 0xff80
//   DELAY:  0x0097
//   DLOOP:  0x0099
//   LDELAY: 0x008e
//   LOOP:   0x0052
//   PAADDY: 0xff81
//   PBADDY: 0xff82
//   PCADDY: 0xff83
//   PTNA:   0x006a
//   PTNB:   0x007c
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
0x0049, 0x01, //         LXI B , 2000H               larson_scanner2.asm:14
0x004a, 0x00, //
0x004b, 0x20, //
0x004c, 0x01, // BEGIN:  LXI B , PTNB                larson_scanner2.asm:17
0x004d, 0x7c, //
0x004e, 0x00, //
0x004f, 0x11, //         LXI D , PTNA                larson_scanner2.asm:18
0x0050, 0x6a, //
0x0051, 0x00, //
0x0052, 0x1a, // LOOP:   LDAX D                      larson_scanner2.asm:20
0x0053, 0x21, //         LXI H , PAADDY              larson_scanner2.asm:21
0x0054, 0x81, //
0x0055, 0xff, //
0x0056, 0x77, //         MOV M , A                   larson_scanner2.asm:22
0x0057, 0x0a, //         LDAX B                      larson_scanner2.asm:24
0x0058, 0x21, //         LXI H , PBADDY              larson_scanner2.asm:25
0x0059, 0x82, //
0x005a, 0xff, //
0x005b, 0x77, //         MOV M , A                   larson_scanner2.asm:26
0x005c, 0xcd, //         CALL LDELAY                 larson_scanner2.asm:28
0x005d, 0x8e, //
0x005e, 0x00, //
0x005f, 0x03, //         INX B                       larson_scanner2.asm:29
0x0060, 0x13, //         INX D                       larson_scanner2.asm:30
0x0061, 0x7b, //         MOV A , E                   larson_scanner2.asm:31
0x0062, 0xfe, //         CPI PTNB                    larson_scanner2.asm:32
0x0063, 0x7c, //
0x0064, 0xca, //         JZ BEGIN                    larson_scanner2.asm:33
0x0065, 0x4c, //
0x0066, 0x00, //
0x0067, 0xc3, //         JMP LOOP                    larson_scanner2.asm:34
0x0068, 0x52, //
0x0069, 0x00, //
0x006a, 0x01, // PTNA:   DB 00000001B,00000010B,0... larson_scanner2.asm:36
0x006b, 0x02, //
0x006c, 0x04, //
0x006d, 0x08, //
0x006e, 0x10, //
0x006f, 0x20, //
0x0070, 0x40, //
0x0071, 0x80, //
0x0072, 0x00, //         DB 00000000B,00000000B,0... larson_scanner2.asm:37
0x0073, 0x00, //
0x0074, 0x00, //
0x0075, 0x80, //         DB 10000000B,01000000B,0... larson_scanner2.asm:38
0x0076, 0x40, //
0x0077, 0x20, //
0x0078, 0x10, //
0x0079, 0x08, //
0x007a, 0x04, //
0x007b, 0x02, //
0x007c, 0x00, // PTNB:   DB 00000000B,00000000B,0... larson_scanner2.asm:39
0x007d, 0x00, //
0x007e, 0x00, //
0x007f, 0x00, //
0x0080, 0x00, //
0x0081, 0x00, //
0x0082, 0x00, //
0x0083, 0x00, //
0x0084, 0x01, //         DB 00000001B,00000010B,0... larson_scanner2.asm:40
0x0085, 0x02, //
0x0086, 0x01, //
0x0087, 0x00, //         DB 00000000B,00000000B,0... larson_scanner2.asm:41
0x0088, 0x00, //
0x0089, 0x00, //
0x008a, 0x00, //
0x008b, 0x00, //
0x008c, 0x00, //
0x008d, 0x00, //
0x008e, 0xc5, // LDELAY: PUSH B                      larson_scanner2.asm:43
0x008f, 0x01, //         LXI B , 2000H               larson_scanner2.asm:44
0x0090, 0x00, //
0x0091, 0x20, //
0x0092, 0xcd, //         CALL DELAY                  larson_scanner2.asm:45
0x0093, 0x97, //
0x0094, 0x00, //
0x0095, 0xc1, //         POP B                       larson_scanner2.asm:46
0x0096, 0xc9, //         RET                         larson_scanner2.asm:47
0x0097, 0xf5, // DELAY:  PUSH PSW                    libs/delay.asm:3
0x0098, 0xc5, //         PUSH B                      libs/delay.asm:4
0x0099, 0x0b, // DLOOP:  DCX B                       libs/delay.asm:5
0x009a, 0x3e, //         MVI A , 0                   libs/delay.asm:6
0x009b, 0x00, //
0x009c, 0xb1, //         ORA C                       libs/delay.asm:7
0x009d, 0xc2, //         JNZ DLOOP                   libs/delay.asm:8
0x009e, 0x99, //
0x009f, 0x00, //
0x00a0, 0xb0, //         ORA B                       libs/delay.asm:9
0x00a1, 0xc2, //         JNZ DLOOP                   libs/delay.asm:10
0x00a2, 0x99, //
0x00a3, 0x00, //
0x00a4, 0xc1, //         POP B                       libs/delay.asm:11
0x00a5, 0xf1, //         POP PSW                     libs/delay.asm:12
0x00a6, 0xc9, //         RET                         libs/delay.asm:13

};


