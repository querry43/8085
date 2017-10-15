#include <arduino.h>
#include "hardware_interface.h"

#ifdef MOCK_HARDWARE

void hold_and_commandeer_bus() { }
void release_bus() { }
void release_hold() { }

void write_mem(const uint16_t addr, const uint8_t data) { }
uint8_t read_mem(const uint16_t addr) { }

#else

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

void write_mem(const uint16_t addr, const uint8_t data) {
  set_address(addr);

  digitalWrite(WR_pin, LOW);
  set_data(data);
  digitalWrite(WR_pin, HIGH);

  DDRC = 0;
  DDRA = 0;
  DDRL = 0;
}

uint8_t read_mem(const uint16_t addr) {
  set_address(addr);

  digitalWrite(RD_pin, LOW);
  uint8_t data = PINL;
  digitalWrite(RD_pin, HIGH);

  DDRC = 0;
  DDRA = 0;
  DDRL = 0;

  return data;
}

void hold_and_commandeer_bus() {
  digitalWrite(HOLD_pin, HIGH);
  pinMode(HOLD_pin, OUTPUT);
  delay(100);

  pinMode(LATCH_EN_pin, OUTPUT);
  pinMode(RD_pin, OUTPUT);
  pinMode(WR_pin, OUTPUT);

  digitalWrite(LATCH_EN_pin, HIGH);
  digitalWrite(RD_pin, HIGH);
  digitalWrite(WR_pin, HIGH);
}

void release_bus() {
  pinMode(LATCH_EN_pin, INPUT);
  pinMode(RD_pin, INPUT);
  pinMode(WR_pin, INPUT);

  PORTC = 0;
  PORTA = 0;
  PORTL = 0;
}

void release_hold() {
  digitalWrite(HOLD_pin, LOW);
  pinMode(HOLD_pin, INPUT);
}

#endif
