const uint16_t output_asm[] = {
  0x0000, 0x31, // LXI SP,4095
  0x0001, 0xff, // 
  0x0002, 0x0f, // 
  0x0003, 0xC3, // JMP START
  0x0004, 0x44, // 
  0x0005, 0x00, // 
  0x0044, 0x26, // START: MVI H,98H
  0x0045, 0x98, // 
  0x0046, 0x2E, //  MVI L,00H
  0x0047, 0x00, // 
  0x0048, 0x36, //  MVI M,00000001B 
  0x0049, 0x01, // 
  0x004a, 0x26, //  MVI H,98H
  0x004b, 0x98, // 
  0x004c, 0x2E, //  MVI L,01H
  0x004d, 0x01, // 
  0x004e, 0x36, //  MVI M,10101010B 
  0x004f, 0xaa, // 
  0x0050, 0x76, //  HLT
};
