#define CMD_SIZE 128
#define CMD_DELIMITER "|"
#define MOCK_HARDWARE
#define BAUD 38400

#include <string.h>
#include "hardware_interface.h"

char receivedBytes[CMD_SIZE];
int iterator = 0;
int commandTerminator = 10;
int targetDeviceMemSize;
byte targetDeviceMemToRead;
int debugMode = 0;

void setup() {
  Serial.begin(BAUD);
  _clearReceivedCommand();
}

void loop() {
  byte byteRead;
  while (Serial.available()) {

    byteRead = Serial.read();

    if(byteRead == '\n' || byteRead == '\r'){
      receivedBytes[iterator] = '\0';
      handleReceivedCommand();
      iterator = 0;
    }else{
      receivedBytes[iterator] = byteRead;
      iterator++;
    }

  }
}

void doTheTest() {
  write_mem(0, 0x3e);
  write_mem(1, 0xc0);
  write_mem(2, 0x30);
  write_mem(3, 0x76);
}

void handleReceivedCommand() {
  if (receivedBytes[0] == 0)
    return;

  if(debugMode == 1){
    //Serial.print("DEBUG Handling this command: ");
    //Serial.println(receivedBytes);
  }

  // parse command and arg here
  const char cmd = receivedBytes[0];
  char* data = parseDataFromCommandString();

  // z - zero
  // m - set mem size
  // r - read address
  // w - write data to address
  // d - tobble debugging
  // h - hold bus
  // l - release bus
  // t - screwing around with testing, temporary

  switch(cmd) {
    case 'z':
      clearTargetDeviceMemory();
      Serial.println("OK");
      break;
    case 'm':
      setTargetDeviceMemorySize(cmd, data); // what if the size is < 0 or like crazy big?
      Serial.println("OK");
      break;
    case 'r':
      printTargetDeviceMemory(cmd, data);
      Serial.println("OK");
      break;
    case 'd':
      toggleDebugMode();
      Serial.println("OK");
      break;
    case 'w':
      writeDataToTargetDeviceMemory(cmd, data);
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
    case 't':
      doTheTest();
      Serial.println("OK");
      break;
    default:
      Serial.println("NOT OK");
      break;
  };

  _clearReceivedCommand();
}

void _clearReceivedCommand() {
  memset(&receivedBytes[0], 0, CMD_SIZE);
}

void toggleDebugMode() {
  Serial.println("DEBUG Toggling debug mode");
  debugMode = ! debugMode;
  pinMode(13, OUTPUT);
  digitalWrite(13, debugMode);
}

void printTargetDeviceMemory(const char cmd, char * data){
  if(debugMode == 1){
    Serial.println("DEBUG Print contents of target device memory addr");
    Serial.print("DEBUG Parsed data: ");
    Serial.println(data);
  }
  //This doesn't do much yet...
}

void clearTargetDeviceMemory(){
  if(debugMode == 1){
    Serial.println("DEBUG Clear target device memory");
  }
  for(uint16_t i = 0; i < targetDeviceMemSize; i++){
    _writeToMem(i, '\0');
  }
}

void setTargetDeviceMemorySize(const char cmd, char * data){
  targetDeviceMemSize = atoi(data);

  if(debugMode == 1){
    Serial.print("DEBUG Set target device memory size to: ");
    Serial.println(targetDeviceMemSize);
  }
}

void writeDataToTargetDeviceMemory(const char cmd, char * data){
  if(debugMode == 1){
    Serial.println("DEBUG Write data to memory");
  }
  
  processHexLine(data);

  if(debugMode == 1){
    Serial.println("DEBUG Done writing to memory");
  }
}

void _writeToMem(uint16_t addr, uint8_t data) {
  if(debugMode == 1){
    Serial.print("DEBUG Write data ");
    Serial.print(data);
    Serial.print(" to addr ");
    Serial.println(addr);
  }
  write_mem(addr, data);
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
    _writeToMem(start_addr, stringToInt(hex_line+byte_offset, 2));
    byte_offset += 2;
    start_addr++;
  }
}

char* parseDataFromCommandString(){
  char* data;
  char* delim_char_ptr = strtok(receivedBytes, CMD_DELIMITER);

  if(delim_char_ptr != NULL){
    delim_char_ptr = strtok(NULL, CMD_DELIMITER);
    data = (char *)delim_char_ptr;
  }else{
    data = (char*)"";
  }

  return data;
}
