#include "asm.h"

const uint8_t
  RD_pin = 11,
  WR_pin = 12,
  ALE_pin = 13,
  HOLD_pin = 2,
  RESET_pin = 4;

// wire AD0-7 to PORTC

const uint8_t program[]  = {
  0x00, JMP,
  0x01, 0,
  0x02, 0xfc,


  // SOUT and halt
  0xfc, MVI_A,
  0xfd, 0b11000000,
  0xfe, SIM,
  0xff, HLT,
};

void setup() {
  pinMode(RD_pin, OUTPUT);
  pinMode(WR_pin, OUTPUT);
  pinMode(ALE_pin, OUTPUT);

  digitalWrite(RD_pin, HIGH);
  digitalWrite(WR_pin, HIGH);
  digitalWrite(ALE_pin, LOW);

  pinMode(HOLD_pin, OUTPUT);
  pinMode(RESET_pin, OUTPUT);

  start_hold();
  reset_cpu();
  
  Serial.begin(9600);
}

void loop() {
  clear_mem();
  // mem_test(); for(;;);

  write_program();
  dump_mem();

  set_ctl_high_imp();

  stop_hold();
  
  for(;;);
}

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
  const uint8_t program_length = sizeof(program) / 2;
  Serial.print("Writing program length ");
  Serial.println(program_length);
  for (uint8_t i = 0; i < program_length; i++)
    write_mem(program[i*2], program[i*2+1]);
}

void dump_mem() {
  char buf[16];
  for (uint16_t i = 0; i < 256; i += 4) {
    sprintf(
      buf,
      "%02x: %02x %02x %02x %02x",
      i,
      read_mem(i),
      read_mem(i+1),
      read_mem(i+2),
      read_mem(i+3)
    );
    Serial.println(buf);
  }
}

void reset_cpu() {
  digitalWrite(RESET_pin, LOW);
  delay(100);
  digitalWrite(RESET_pin, HIGH);
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
}

