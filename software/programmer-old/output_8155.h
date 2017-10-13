
const uint16_t output_8155_asm_h[] = {

// Symbol Table:
//   CSADDY: 0xff80
//   PAADDY: 0xff81
//   PBADDY: 0xff82
//   PCADDY: 0xff83
//   START:  0x0044


0x0000, 0x31, //         LXI SP , 8191               output-8155.asm:1
0x0001, 0xff, //
0x0002, 0x1f, //
0x0003, 0xc3, //         JMP START                   output-8155.asm:2
0x0004, 0x44, //
0x0005, 0x00, //
0x0044, 0x21, //         LXI H , CSADDY              output-8155.asm:7
0x0045, 0x80, //
0x0046, 0xff, //
0x0047, 0x36, //         MVI M , 00000001B           output-8155.asm:8
0x0048, 0x01, //
0x0049, 0x21, //         LXI H , PAADDY              output-8155.asm:11
0x004a, 0x81, //
0x004b, 0xff, //
0x004c, 0x36, //         MVI M , 10101010B           output-8155.asm:12
0x004d, 0xaa, //
0x004e, 0x76, //         HLT                         output-8155.asm:14

};


