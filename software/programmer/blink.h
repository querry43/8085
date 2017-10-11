
const uint16_t blink_asm_h[] = {

// Symbol Table:
//   DELAY:  0x0056
//   DLOOP:  0x0058
//   START:  0x0044


0x0000, 0x31, //         LXI SP , 8191               blink.asm:1
0x0001, 0xff, //
0x0002, 0x1f, //
0x0003, 0xc3, //         JMP START                   blink.asm:2
0x0004, 0x44, //
0x0005, 0x00, //
0x0044, 0x01, // START:  LXI B , FFFFH               blink.asm:5
0x0045, 0xff, //
0x0046, 0xff, //
0x0047, 0x3e, //         MVI A , 01000000B           blink.asm:7
0x0048, 0x40, //
0x0049, 0x30, //         SIM                         blink.asm:8
0x004a, 0xcd, //         CALL DELAY                  blink.asm:9
0x004b, 0x56, //
0x004c, 0x00, //
0x004d, 0x3e, //         MVI A , 11000000B           blink.asm:11
0x004e, 0xc0, //
0x004f, 0x30, //         SIM                         blink.asm:12
0x0050, 0xcd, //         CALL DELAY                  blink.asm:13
0x0051, 0x56, //
0x0052, 0x00, //
0x0053, 0xc3, //         JMP START                   blink.asm:15
0x0054, 0x44, //
0x0055, 0x00, //
0x0056, 0xf5, // DELAY:  PUSH PSW                    libs/delay.asm:3
0x0057, 0xc5, //         PUSH B                      libs/delay.asm:4
0x0058, 0x0b, // DLOOP:  DCX B                       libs/delay.asm:5
0x0059, 0x3e, //         MVI A , 0                   libs/delay.asm:6
0x005a, 0x00, //
0x005b, 0xb1, //         ORA C                       libs/delay.asm:7
0x005c, 0xc2, //         JNZ DLOOP                   libs/delay.asm:8
0x005d, 0x58, //
0x005e, 0x00, //
0x005f, 0xb0, //         ORA B                       libs/delay.asm:9
0x0060, 0xc2, //         JNZ DLOOP                   libs/delay.asm:10
0x0061, 0x58, //
0x0062, 0x00, //
0x0063, 0xc1, //         POP B                       libs/delay.asm:11
0x0064, 0xf1, //         POP PSW                     libs/delay.asm:12
0x0065, 0xc9, //         RET                         libs/delay.asm:13

};


