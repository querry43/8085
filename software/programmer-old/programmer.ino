#include "hardware_interface.h"

#define MEMTEST false


void setup() {
  Serial.begin(38400);

  pinMode(DIAG_pin, INPUT);

  hold_and_commandeer_bus();

  // prepare for reset
  digitalWrite(RESET_pin, HIGH);
  pinMode(RESET_pin, OUTPUT);

  if (MEMTEST) {
    test_mem();
  } else {
    clear_mem();
    write_program();
  }

  release_bus();

  // reset cpu
  digitalWrite(RESET_pin, LOW);
  delay(100);
  pinMode(RESET_pin, INPUT); // high impedance lets reset circuit take over

  release_hold();
}

void loop() {
  if (digitalRead(DIAG_pin) == 0) {
    Serial.println("\nDIAG");
    hold_and_commandeer_bus();
    dump_mem();
    release_bus();
    release_hold();

    delay(500); // cheap debounce
    while (digitalRead(DIAG_pin) == 0);
  }
}