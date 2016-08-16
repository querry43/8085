const uint16_t multiplex_output_asm_h[] = {

0x0000, 0x31, //         LXI SP , 4095               preamble:1
0x0001, 0xff, //
0x0002, 0x0f, //
0x0003, 0xc3, //         JMP START                   preamble:2
0x0004, 0x44, //
0x0005, 0x00, //
0x0044, 0x21, //         LXI H , CSADDY              asm/multiplex_output.asm:6
0x0045, 0x00, //
0x0046, 0x98, //
0x0047, 0x36, //         MVI M , 00000011B           asm/multiplex_output.asm:7
0x0048, 0x03, //
0x0049, 0x01, //         LXI B , 10                  asm/multiplex_output.asm:11
0x004a, 0x0a, //
0x004b, 0x00, //
0x004c, 0x21, // LOOP:   LXI H , PAADDY              asm/multiplex_output.asm:14
0x004d, 0x01, //
0x004e, 0x98, //
0x004f, 0x36, //         MVI M , 0                   asm/multiplex_output.asm:15
0x0050, 0x00, //
0x0051, 0x21, //         LXI H , PBADDY              asm/multiplex_output.asm:16
0x0052, 0x02, //
0x0053, 0x98, //
0x0054, 0x36, //         MVI M , 00000001B           asm/multiplex_output.asm:17
0x0055, 0x01, //
0x0056, 0x21, //         LXI H , PAADDY              asm/multiplex_output.asm:19
0x0057, 0x01, //
0x0058, 0x98, //
0x0059, 0x3a, //         LDA PTN+0                   asm/multiplex_output.asm:20
0x005a, 0x8b, //
0x005b, 0x00, //
0x005c, 0x77, //         MOV M , A                   asm/multiplex_output.asm:21
0x005d, 0xcd, //         CALL DELAY                  asm/multiplex_output.asm:23
0x005e, 0x8e, //
0x005f, 0x00, //
0x0060, 0x21, //         LXI H , PAADDY              asm/multiplex_output.asm:25
0x0061, 0x01, //
0x0062, 0x98, //
0x0063, 0x36, //         MVI M , 0                   asm/multiplex_output.asm:26
0x0064, 0x00, //
0x0065, 0x21, //         LXI H , PBADDY              asm/multiplex_output.asm:27
0x0066, 0x02, //
0x0067, 0x98, //
0x0068, 0x36, //         MVI M , 00000010B           asm/multiplex_output.asm:28
0x0069, 0x02, //
0x006a, 0x21, //         LXI H , PAADDY              asm/multiplex_output.asm:30
0x006b, 0x01, //
0x006c, 0x98, //
0x006d, 0x3a, //         LDA PTN+1                   asm/multiplex_output.asm:31
0x006e, 0x8c, //
0x006f, 0x00, //
0x0070, 0x77, //         MOV M , A                   asm/multiplex_output.asm:32
0x0071, 0xcd, //         CALL DELAY                  asm/multiplex_output.asm:34
0x0072, 0x8e, //
0x0073, 0x00, //
0x0074, 0x21, //         LXI H , PAADDY              asm/multiplex_output.asm:36
0x0075, 0x01, //
0x0076, 0x98, //
0x0077, 0x36, //         MVI M , 0                   asm/multiplex_output.asm:37
0x0078, 0x00, //
0x0079, 0x21, //         LXI H , PBADDY              asm/multiplex_output.asm:38
0x007a, 0x02, //
0x007b, 0x98, //
0x007c, 0x36, //         MVI M , 00000100B           asm/multiplex_output.asm:39
0x007d, 0x04, //
0x007e, 0x21, //         LXI H , PAADDY              asm/multiplex_output.asm:41
0x007f, 0x01, //
0x0080, 0x98, //
0x0081, 0x3a, //         LDA PTN+2                   asm/multiplex_output.asm:42
0x0082, 0x8d, //
0x0083, 0x00, //
0x0084, 0x77, //         MOV M , A                   asm/multiplex_output.asm:43
0x0085, 0xcd, //         CALL DELAY                  asm/multiplex_output.asm:45
0x0086, 0x8e, //
0x0087, 0x00, //
0x0088, 0xc3, //         JMP LOOP                    asm/multiplex_output.asm:47
0x0089, 0x4c, //
0x008a, 0x00, //
0x008b, 0x0d, // PTN:    DB 00001101B,00000110B,0... asm/multiplex_output.asm:49
0x008c, 0x06, //
0x008d, 0x0a, //
0x008e, 0xf5, // DELAY:  PUSH PSW                    asm/libs/delay.asm:3
0x008f, 0xc5, //         PUSH B                      asm/libs/delay.asm:4
0x0090, 0x0b, // DLOOP:  DCX B                       asm/libs/delay.asm:5
0x0091, 0x3e, //         MVI A , 0                   asm/libs/delay.asm:6
0x0092, 0x00, //
0x0093, 0xb1, //         ORA C                       asm/libs/delay.asm:7
0x0094, 0xc2, //         JNZ DLOOP                   asm/libs/delay.asm:8
0x0095, 0x90, //
0x0096, 0x00, //
0x0097, 0xb0, //         ORA B                       asm/libs/delay.asm:9
0x0098, 0xc2, //         JNZ DLOOP                   asm/libs/delay.asm:10
0x0099, 0x90, //
0x009a, 0x00, //
0x009b, 0xc1, //         POP B                       asm/libs/delay.asm:11
0x009c, 0xf1, //         POP PSW                     asm/libs/delay.asm:12
0x009d, 0xc9, //         RET                         asm/libs/delay.asm:13

};

