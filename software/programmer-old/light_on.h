const uint16_t light_on_asm_h[] = {

// Symbol Table:
//   START:  0x0044


0x0000, 0x31, //         LXI SP , 8191               preamble:1
0x0001, 0xff, //
0x0002, 0x1f, //
0x0003, 0xc3, //         JMP START                   preamble:2
0x0004, 0x44, //
0x0005, 0x00, //
0x0044, 0x3e, // START:  MVI A , 11000000B           asm/light_on.asm:1
0x0045, 0xc0, //
0x0046, 0x30, //         SIM                         asm/light_on.asm:2
0x0047, 0x76, //         HLT                         asm/light_on.asm:3

};
