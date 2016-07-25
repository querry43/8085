#pragma once

const uint8_t light_on_program[] = {
  0x00, MVI_A,
  0x01, 0b11000000,
  0x02, SIM,
  0x03, HLT,
};
