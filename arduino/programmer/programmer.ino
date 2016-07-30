#include "asm.h"
#include "light_on.h"

const uint8_t
  LATCH_EN_pin = 4, 
  RD_pin = 10,
  WR_pin = 11,
  LED_pin = 13;

/* Hookup:
 *  A0-A7 to PORTC (37-30)
 *  A8-A15 to PORTA (22-29)
 *  D0-D7 to PORTL (49-42)
 */

#define PROGRAM light_on_program
#define MEM_SIZE 4096
#define DEBUG false

void setup() {
  Serial.begin(38400);

  // hold the cpu

  pinMode(LATCH_EN_pin, OUTPUT);
  pinMode(RD_pin, OUTPUT);
  pinMode(WR_pin, OUTPUT);

  digitalWrite(LATCH_EN_pin, HIGH);
  digitalWrite(RD_pin, HIGH);
  digitalWrite(WR_pin, HIGH);

  // mem_test(); return;

  clear_mem();
  write_program();

  // set all lines high-impendance
  // reset and start the cpu
}

void loop() { }

void write_mem(const uint16_t addr, const uint8_t data) {
  set_address(addr);

  digitalWrite(WR_pin, LOW);
  set_data(data);
  digitalWrite(WR_pin, HIGH);

  if (DEBUG) {
    Serial.print("writing ");
    Serial.print(data, HEX);
    Serial.print(" to ");
    Serial.println(addr, HEX);
  }

  DDRC = 0;
  DDRA = 0;
  DDRL = 0;
}

unsigned char read_mem(const uint16_t addr) {
  set_address(addr);

  digitalWrite(RD_pin, LOW);
  uint8_t data = PINL;
  digitalWrite(RD_pin, HIGH);

  if (DEBUG) {
    Serial.print("reading ");
    Serial.print(data, BIN);
    Serial.print(" from ");
    Serial.println(addr, HEX);
  }

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
  bool printed_ellipsis = false;

  Serial.println("Memory:");
  for (uint16_t i = 0; i < MEM_SIZE; i += 8) {
    uint8_t mem[] = {
      read_mem(i+0), read_mem(i+1), read_mem(i+2), read_mem(i+3),
      read_mem(i+4), read_mem(i+5), read_mem(i+6), read_mem(i+7),
    };

    bool all_zero = true;
    for (int i = 0; i < 8; i++)
      all_zero = all_zero && mem[i] == 0;

    if (!all_zero || i == 0 || i == MEM_SIZE-8) {
      sprintf(
        buf,
        "%04x: %02x %02x %02x %02x    %02x %02x %02x %02x",
        i,
        mem[0], mem[1], mem[2], mem[3],
        mem[4], mem[5], mem[6], mem[7]
      );
      printed_ellipsis = false;
      Serial.println(buf);
    } else {
      if (!printed_ellipsis) {
        Serial.println("...");
        printed_ellipsis = true;
      }
    }
  }
}

void write_program() {
  Serial.print("Writing program length ");
  Serial.println(program_length());
  for (uint8_t i = 0; i < program_length(); i++) {
    uint16_t address = PROGRAM[i*2];
    uint16_t data = PROGRAM[i*2+1];

    if (address >= MEM_SIZE) {
      Serial.print("Attempting to write to beyond memory at address ");
      Serial.println(address, HEX);
      break;
    }

    write_mem(address, data);
  }
  dump_mem();
  verify_program();
}

void verify_program() {
  uint8_t prog_cksum = 0,
    mem_cksum = 0;

  for (uint16_t i = 0; i < program_length(); i++)
    prog_cksum += PROGRAM[i*2+1];

  for (uint16_t i = 0; i < MEM_SIZE; i++)
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

uint8_t program_length() { return sizeof(PROGRAM) / 4; }
