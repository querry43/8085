#pragma once

const uint8_t blink_program[] = {

  0x00, MVI_A,
  0x01, 0b11000000,
  0x02, SIM,

  0x10, CALL,
  0x11, 0xd0,
  0x22, 0x00,

  0x30, MVI_A,
  0x31, 0b01000000,
  0x32, SIM,

  0x40, CALL,
  0x41, 0xd0,
  0x42, 0x00,

  0x50, JMP,
  0x51, 0x00,
  0x52, 0x00,

  // delay
  0xc0, MVI_A,
  0xc1, 0xff,
  0xc2, DCR_A,
  0xc3, JNZ,
  0xc4, 0xc2,
  0xc5, 0x00,
  0xc6, RET,

  // long delay
  0xd0, MVI_B,
  0xd1, 0xff,
  0xd2, CALL,
  0xd3, 0xc0,
  0xd4, 0x00,
  0xd5, DCR_B,
  0xd6, JNZ,
  0xd7, 0xd2,
  0xd8, 0x00,
  0xd9, RET,
};
