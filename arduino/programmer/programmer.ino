#include "asm.h"
#include "blink.h"
#include "light_on.h"
#include "timer.h"
#include "output.h"

const uint8_t
  RD_pin = 10,
  WR_pin = 11,
  ALE_pin = 12,
  RESET_pin = 4,
  HOLD_pin = 5,
  LED_pin = 13;

// wire AD0-7 to PORTC

#define PROGRAM blink_program

void setup() {
  Serial.begin(9600);

  pinMode(LED_pin, OUTPUT);
  digitalWrite(LED_pin, LOW);

  pinMode(RESET_pin, OUTPUT);
  pinMode(HOLD_pin, OUTPUT);

  start_hold();
  delay(100);

  pinMode(RD_pin, OUTPUT);
  pinMode(WR_pin, OUTPUT);
  pinMode(ALE_pin, OUTPUT);

  digitalWrite(RD_pin, HIGH);
  digitalWrite(WR_pin, HIGH);
  digitalWrite(ALE_pin, LOW);

  clear_mem();
  // mem_test(); return;

  write_program();
  dump_mem();
  verify_program();

  reset_cpu();
  reset_cpu();

  set_ctl_high_imp();

  digitalWrite(LED_pin, HIGH);

  stop_hold();
}

void loop() { }

void write_mem(uint8_t addr, unsigned char data) {
  set_bus_output();
  latch_address(addr);

  digitalWrite(WR_pin, LOW);
  PORTC = data;
  digitalWrite(WR_pin, HIGH);

/*
  Serial.print("writing ");
  Serial.print(data, HEX);
  Serial.print(" to ");
  Serial.println(addr, HEX);
*/

  set_bus_output();
}

unsigned char read_mem(uint16_t addr) {
  set_bus_output();
  latch_address(addr);
  set_bus_input();

  digitalWrite(RD_pin, LOW);
  uint8_t data = PINC;
  digitalWrite(RD_pin, HIGH);

  return data;
}

inline void set_bus_output() {
  DDRC = 0xff;
}

inline void set_bus_input() {
  DDRC = 0;
}

void latch_address(uint8_t addr) {
  digitalWrite(ALE_pin, HIGH);
  PORTC = addr;
  digitalWrite(ALE_pin, LOW);
}

void clear_mem() {
  for (uint16_t i = 0; i < 256; i++)
    write_mem(i, 0);
}

void mem_test() {
  for (uint16_t i = 0; i < 256; i++) {
    if (i % 2 == 0)
      write_mem(i, 0b10101010);
    else
      write_mem(i, 0b01010101);
  }

  dump_mem();
}

void write_program() {
  Serial.print("Writing program length ");
  Serial.println(program_length());
  for (uint8_t i = 0; i < program_length(); i++)
    write_mem(PROGRAM[i*2], PROGRAM[i*2+1]);
}

void verify_program() {
  uint8_t prog_cksum = 0,
    mem_cksum = 0;

  for (uint8_t i = 0; i < program_length(); i++)
    prog_cksum += PROGRAM[i*2+1];

  for (uint16_t i = 0; i < 256; i++)
      mem_cksum += read_mem(i);

  if (prog_cksum != mem_cksum) {
    Serial.println("PROGRAMMING FAILED, MISMATCHING CKSUM");
    Serial.print("Got: ");
    Serial.print(mem_cksum);
    Serial.print(" Expected: ");
    Serial.println(prog_cksum);
  } else {
    Serial.println("Programming OK");
  }
}

uint8_t program_length() { return sizeof(PROGRAM) / 2; }

void dump_mem() {
  char buf[64];
  for (uint16_t i = 0; i < 256; i += 8) {
    sprintf(
      buf,
      "%02x: %02x %02x %02x %02x    %02x %02x %02x %02x",
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

void reset_cpu() {
  digitalWrite(RESET_pin, LOW);
  delay(100);
  digitalWrite(RESET_pin, HIGH);
  delay(100);
}

void start_hold() {
  digitalWrite(HOLD_pin, HIGH);
}

void stop_hold() {
  digitalWrite(HOLD_pin, LOW);
}

void set_ctl_high_imp() {
  pinMode(RD_pin, INPUT);
  pinMode(WR_pin, INPUT);
  pinMode(ALE_pin, INPUT);

  pinMode(RESET_pin, INPUT);
  pinMode(HOLD_pin, INPUT);
}

