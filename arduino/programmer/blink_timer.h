#pragma once

const uint8_t blink_timer_program[] = {
  0x00, MVI_A,
  0x01, 0b11000000,
  0x02, SIM,
  0x03, HLT,

  TRAP+0, MVI_A,
  TRAP+1, 0b01000000,
  TRAP+2, SIM,
  TRAP+3, HLT,
};
