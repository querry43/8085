#include "asm.h"
#include "light_on.h"

const uint8_t
  RD_pin = 10,
  WR_pin = 11,
  LED_pin = 13;

/* Hookup:
 *  A0-A7 to PORTC
 *  A8-A15 to PORTA
 *  D0-D7 to PORTL
 */

#define PROGRAM light_on_program
#define MEM_SIZE 4096

void setup() {
  Serial.begin(38400);

  pinMode(RD_pin, OUTPUT);
  pinMode(WR_pin, OUTPUT);

  digitalWrite(RD_pin, HIGH);
  digitalWrite(WR_pin, HIGH);

  mem_test(); return;
}

void loop() { }

void write_mem(const uint16_t addr, const uint8_t data) {
  set_address(addr);

  digitalWrite(WR_pin, LOW);
  set_data(data);
  digitalWrite(WR_pin, HIGH);

/*
  Serial.print("writing ");
  Serial.print(data, HEX);
  Serial.print(" to ");
  Serial.println(addr, HEX);
*/

  DDRC = 0;
  DDRA = 0;
  DDRL = 0;
}

unsigned char read_mem(const uint16_t addr) {
  set_address(addr);

  digitalWrite(RD_pin, LOW);
  uint8_t data = PINL;
  digitalWrite(RD_pin, HIGH);

  DDRC = 0;
  DDRA = 0;
  DDRL = 0;

  return data;
}

void set_address(const uint16_t addr) {
  DDRC = 0xff;
  DDRA = 0xff;

  PORTC = addr;
  PORTA = addr >> 8;
}

void set_data(const uint8_t data) {
  DDRL = 0xff;
  PORTL = data;
}

void clear_mem() {
  for (uint16_t i = 0; i < MEM_SIZE; i++)
    write_mem(i, 0);
}

void mem_test() {
  Serial.println("Writing test pattern to memory");

  write_alternative_pattern();
  dump_mem();

  write_incrementing_pattern();
  dump_mem();
}

void write_alternative_pattern() {
  for (uint16_t i = 0; i < MEM_SIZE; i++) {
    if (i % 2 == 0)
      write_mem(i, 0b10101010);
    else
      write_mem(i, 0b01010101);
  }
}

void write_incrementing_pattern() {
  for (uint16_t i = 0; i < MEM_SIZE/2; i++) {
    uint8_t high = i >> 8;
    uint8_t low = i;
    write_mem(i*2, high);
    write_mem((i*2)+1, low);
  }
}

void dump_mem() {
  char buf[64];
  Serial.println("Memory:");
  for (uint16_t i = 0; i < MEM_SIZE; i += 8) {
    sprintf(
      buf,
      "%04x: %02x %02x %02x %02x    %02x %02x %02x %02x",
      i,
      read_mem(i+0),
      read_mem(i+1),
      read_mem(i+2),
      read_mem(i+3),
      read_mem(i+4),
      read_mem(i+5),
      read_mem(i+6),
      read_mem(i+7)
    );
    Serial.println(buf);
  }
}

