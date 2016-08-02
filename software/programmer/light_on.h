#pragma once

#define OFFSET 2048

const uint16_t light_on_program[] = {
  OFFSET+0, MVI_A,
  OFFSET+1, 0b11000000,
  OFFSET+2, SIM,
  OFFSET+3, HLT,
};
