#pragma once

const uint8_t light_on_program[] = {
  0x00, JMP,
  0x01, START,
  0x02, 0x00,

  START+0, MVI_A,
  START+1, 0b11000000,
  START+2, SIM,
  START+3, HLT,
};
