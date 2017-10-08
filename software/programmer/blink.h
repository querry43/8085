const uint16_t blink_asm_h[] = {

// Symbol Table:
//   DELAY:  0x0056
//   DLOOP:  0x0058
//   START:  0x0044


0x0000, 0x31, //         LXI SP , 8191               preamble:1
0x0001, 0xff, //
0x0002, 0x1f, //
0x0003, 0xc3, //         JMP START                   preamble:2
0x0004, 0x44, //
0x0005, 0x00, //
0x0044, 0x01, // START:  LXI B , FFFFH               asm/blink.asm:1
0x0045, 0xff, //
0x0046, 0xff, //
0x0047, 0x3e, //         MVI A , 01000000B           asm/blink.asm:3
0x0048, 0x40, //
0x0049, 0x30, //         SIM                         asm/blink.asm:4
0x004a, 0xcd, //         CALL DELAY                  asm/blink.asm:5
0x004b, 0x56, //
0x004c, 0x00, //
0x004d, 0x3e, //         MVI A , 11000000B           asm/blink.asm:7
0x004e, 0xc0, //
0x004f, 0x30, //         SIM                         asm/blink.asm:8
0x0050, 0xcd, //         CALL DELAY                  asm/blink.asm:9
0x0051, 0x56, //
0x0052, 0x00, //
0x0053, 0xc3, //         JMP START                   asm/blink.asm:11
0x0054, 0x44, //
0x0055, 0x00, //
0x0056, 0xf5, // DELAY:  PUSH PSW                    asm/libs/delay.asm:3
0x0057, 0xc5, //         PUSH B                      asm/libs/delay.asm:4
0x0058, 0x0b, // DLOOP:  DCX B                       asm/libs/delay.asm:5
0x0059, 0x3e, //         MVI A , 0                   asm/libs/delay.asm:6
0x005a, 0x00, //
0x005b, 0xb1, //         ORA C                       asm/libs/delay.asm:7
0x005c, 0xc2, //         JNZ DLOOP                   asm/libs/delay.asm:8
0x005d, 0x58, //
0x005e, 0x00, //
0x005f, 0xb0, //         ORA B                       asm/libs/delay.asm:9
0x0060, 0xc2, //         JNZ DLOOP                   asm/libs/delay.asm:10
0x0061, 0x58, //
0x0062, 0x00, //
0x0063, 0xc1, //         POP B                       asm/libs/delay.asm:11
0x0064, 0xf1, //         POP PSW                     asm/libs/delay.asm:12
0x0065, 0xc9, //         RET                         asm/libs/delay.asm:13

};
