const uint16_t output_asm_h[] = {

0x0000, 0x31, //         LXI SP , 4095               preamble:1
0x0001, 0xff, //
0x0002, 0x0f, //
0x0003, 0xc3, //         JMP START                   preamble:2
0x0004, 0x44, //
0x0005, 0x00, //
0x0044, 0x21, // START:  LXI H , CSADDY              asm/output.asm:3
0x0045, 0x00, //
0x0046, 0x98, //
0x0047, 0x36, //         MVI M , 00000001B           asm/output.asm:4
0x0048, 0x01, //
0x0049, 0x21, //         LXI H , PAADDY              asm/output.asm:6
0x004a, 0x01, //
0x004b, 0x98, //
0x004c, 0x36, //         MVI M , 10101010B           asm/output.asm:7
0x004d, 0xaa, //
0x004e, 0x76, //         HLT                         asm/output.asm:9

};

