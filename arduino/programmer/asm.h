#pragma once

// instructions
#define CALL 0xcd
#define DCR_A 0x3d
#define DCR_B 0x05
#define DCR_C 0x0d
#define DCX_H 0x2b
#define HLT 0x76
#define JMP 0xc3
#define JNZ 0xc2
#define LXI_H 0x21
#define LXI_SP 0x31
#define MOV_M_A 0x77
#define MVI_A 0x3e
#define MVI_B 0x06
#define MVI_C 0x0e
#define MVI_H 0x26
#define MVI_L 0x2e
#define MVI_M 0x36
#define NOP 0x00
#define ORA_H 0xb4
#define ORA_L 0xb5
#define POP_H 0xe1
#define POP_PSW 0xf1
#define PUSH_H 0xe5
#define PUSH_PSW 0xf5
#define RAL 0x17
#define RET 0xc9
#define SIM 0x30

// addresses
#define TRAP 0x24
#define RST_5_5 0x2c
#define RST_6_5 0x34
#define RST_7_5 0x3c

// one document suggests we reserve the first 64 bytes
// for trap vectors, but that would overlap with RST.7.5.
// 8 bytes from that is 0x44.
#define START 0x44

// initialize
#define SET_SP 0x00, LXI_SP, 0x01, 0xff, 0x02, 0x00
