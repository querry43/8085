#pragma once

const uint16_t light_on_program[] = {
  0, MVI_A,
  1, 0b11000000,
  2, SIM,
  3, HLT,
};
