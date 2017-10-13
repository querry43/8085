#pragma once


/* Hookup:
 *  A0-A7 to PORTC (37-30)
 *  A8-A15 to PORTA (22-29)
 *  D0-D7 to PORTL (49-42)
 */

#include <arduino.h>

#include "noop.h"
#include "light_on.h"
#include "blink.h"
#include "output_8155.h"
#include "larson_scanner2.h"

#define MEM_SIZE 2048
#define PROGRAM larson_scanner2_asm_h
#define DEBUG false

const uint8_t
  HOLD_pin = 8,
  RESET_pin = 9,
  RD_pin = 10,
  WR_pin = 11,
  LATCH_EN_pin = 12,
  DIAG_pin = 13;


void write_mem(const uint16_t addr, const uint8_t data);
unsigned char read_mem(const uint16_t addr);

void clear_mem();
void mem_test();
void dump_mem();
void write_program();
void verify_program();

void hold_and_commandeer_bus();
void release_bus();
void release_hold();


