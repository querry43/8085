#include <arduino.h>
#include <string.h>
#include "hardware_interface.h"
#include "serial_interface.h"

char receivedBytes[CMD_SIZE];
int iterator = 0;
int targetDeviceRomOffset;
int targetDeviceRomSize;
int debugMode = 0;

void writeToMem(uint16_t addr, uint8_t data) {
  if(debugMode == 1){
    Serial.print("DEBUG Write data ");
    Serial.print(data);
    Serial.print(" to addr ");
    Serial.println(addr);
  }
  write_mem(addr, data);
}

void clearReceivedCommand() {
  memset(&receivedBytes[0], 0, CMD_SIZE);
}

void toggle_debug() {
  Serial.println("DEBUG Toggling debug mode");
  debugMode = ! debugMode;
  pinMode(13, OUTPUT);
  digitalWrite(13, debugMode);
}

void dump_memory_contents(const char cmd, char * data){
  char buf[64];
  bool printed_ellipsis = false;

  Serial.println("Memory:");
  for (uint16_t i = targetDeviceRomOffset; i < targetDeviceRomOffset+targetDeviceRomSize; i += 8) {
    uint8_t mem[] = {
      read_mem(i+0), read_mem(i+1), read_mem(i+2), read_mem(i+3),
      read_mem(i+4), read_mem(i+5), read_mem(i+6), read_mem(i+7),
    };

    bool all_zero = true;
    for (int i = 0; i < 8; i++)
      all_zero = all_zero && mem[i] == 0;

    if (!all_zero || i == targetDeviceRomOffset || i == targetDeviceRomOffset+targetDeviceRomSize-8) {
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

void zero_rom(){
  if(debugMode == 1){
    Serial.println("DEBUG Clear target device memory");
  }
  for(uint16_t i = targetDeviceRomOffset; i < targetDeviceRomOffset+targetDeviceRomSize; i++){
    writeToMem(i, '\0');
  }
}

void set_rom_offset(const char cmd, char * data){
  targetDeviceRomOffset = atol(data);

  if(debugMode == 1){
    Serial.print("DEBUG Set target device memory offset to: ");
    Serial.println(targetDeviceRomOffset);
  }
}

void set_rom_size(const char cmd, char * data){
  targetDeviceRomSize = atol(data);

  if(debugMode == 1){
    Serial.print("DEBUG Set target device memory size to: ");
    Serial.println(targetDeviceRomSize);
  }
}

uint16_t stringToInt(char * str, int len){
  char buffer[8];
  strncpy(buffer, str, len);
  buffer[len] = '\n';
  return strtol(buffer, NULL, 16);
}

void processHexLine(char * hex_line){
  uint16_t num_bytes = stringToInt(hex_line+1, 2);
  uint16_t start_addr = stringToInt(hex_line+3, 4);
  uint16_t type = stringToInt(hex_line+7, 2);

  // ignore footers and junk
  if (type != 0)
    return;

  int byte_offset = 9;
  while (num_bytes-- > 0) {
    writeToMem(start_addr, stringToInt(hex_line+byte_offset, 2));
    byte_offset += 2;
    start_addr++;
  }
}

void parse_hex_and_write_to_mem(const char cmd, char * data){
  if(debugMode == 1){
    Serial.println("DEBUG Write data to memory");
  }

  processHexLine(data);

  if(debugMode == 1){
    Serial.println("DEBUG Done writing to memory");
  }
}

void process_received_command() {
  if (receivedBytes[0] == 0)
    return;

  // parse command and arg here
  const char cmd = receivedBytes[0];
  char* data = receivedBytes+2;

  if(debugMode == 1){
    //Serial.print("DEBUG Handling this command: ");
    //Serial.println(receivedBytes);
  }

  // d - toggle debugging output
  // h - take a hold on the bus so the cpu doesn't get confused
  // l - release bus and reset the cpu
  // m - set rom size
  // o - set rom offset
  // p - ping
  // r - read address
  // w - write data to address
  // z - zero out memory

  switch(cmd) {
    case 'p':
      Serial.println("OK");
      break;
    case 'z':
      zero_rom();
      Serial.println("OK");
      break;
    case 'o':
      set_rom_offset(cmd, data);
      Serial.println("OK");
      break;
    case 'm':
      set_rom_size(cmd, data);
      Serial.println("OK");
      break;
    case 'r':
      dump_memory_contents(cmd, data);
      Serial.println("OK");
      break;
    case 'd':
      toggle_debug();
      Serial.println("OK");
      break;
    case 'w':
      parse_hex_and_write_to_mem(cmd, data);
      Serial.println("OK");
      break;
    case 'h':
      hold_and_commandeer_bus();
      Serial.println("OK");
      break;
    case 'l':
      release_bus();
      reset_cpu();
      release_hold();
      Serial.println("OK");
      break;
    default:
      Serial.println("NOT OK");
      break;
  };

  clearReceivedCommand();
}

void serial_interface_loop() {
  byte byteRead;
  while (Serial.available()) {

    byteRead = Serial.read();

    if(byteRead == '\n' || byteRead == '\r'){
      receivedBytes[iterator] = '\0';
      process_received_command();
      iterator = 0;
    }else{
      receivedBytes[iterator] = byteRead;
      iterator++;
    }

  }
}

void setup_serial_interface() {
  Serial.begin(BAUD);
  clearReceivedCommand();
}
