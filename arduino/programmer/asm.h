#pragma once

// instructions
#define CALL 0xcd
#define DCR_A 0x3d
#define DCR_B 0x05
#define HLT 0x76
#define JMP 0xc3
#define JNZ 0xc2
#define LXI_SP 0x31
#define MVI_A 0x3e
#define MVI_B 0x06
// consider LXI_H to load the pair
#define MVI_H 0x26
#define MVI_L 0x2e
#define MVI_M 0x36
#define NOP 0x00
#define RET 0xc9
#define SIM 0x30

// addresses
#define TRAP 0x24
#define RST_5_5 0x2c
#define RST_6_5 0x34
#define RST_7_5 0x3c

// initialize
#define ASM_PREAMBLE 0x00, LXI_SP, 0x01, 0xff, 0x02, 0x00
