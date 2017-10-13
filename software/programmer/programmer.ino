#define CMD_SIZE 128
#define CMD_DELIMITER "|"
#include <string.h>

char receivedBytes[CMD_SIZE];
//const char* CMD_DELIMITER = "|";
int iterator = 0;
int commandTerminator = 10;
int targetDeviceMemSize;
byte targetDeviceMemToRead;
int debugMode = 0;

void setup() {
  Serial.begin(9600);
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

void handleReceivedCommand() {
  if (receivedBytes[0] == 0)
    return;

  if(debugMode == 1){
    Serial.print("DEBUG Handling this command: ");
    Serial.println(receivedBytes);
  }

  // parse command and arg here

  switch(receivedBytes[0]) {
    case 'z':
      clearTargetDeviceMemory();
      Serial.println("OK");
      break;
    case 'm':
      setTargetDeviceMemorySize(); // what if the size is < 0 or like crazy big?
      Serial.println("OK");
      break;
    case 'r':
      printTargetDeviceMemory();
      Serial.println("OK");
      break;
    case 'd':
      toggleDebugMode();
      Serial.println("OK");
      break;
    case 'w':
      writeDataToTargetDeviceMemory();
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

void printTargetDeviceMemory(){
  if(debugMode == 1){
    Serial.println("DEBUG Print contents of target device memory addr");
  }
  const char* data_val = parseDataFromCommandString();
  if(debugMode == 1){
    Serial.print("DEBUG Parsed data: ");
    Serial.println(data_val);
  }
}

void clearTargetDeviceMemory(){
  if(debugMode == 1){
    Serial.println("DEBUG Clear target device memory");
  }
  for(uint16_t i = 0; i < targetDeviceMemSize; i++){
    _writeToMem(i, '\0');
  }
}

void setTargetDeviceMemorySize(){
  const char* deviceMemoryStr = parseDataFromCommandString();
  targetDeviceMemSize = atoi(deviceMemoryStr);

  if(debugMode == 1){
    Serial.print("DEBUG Set target device memory size to: ");
    Serial.println(targetDeviceMemSize);
  }
}

void writeDataToTargetDeviceMemory(){
  
}

void _writeToMem(const uint16_t addr, char data) {
  // Do things
  if(debugMode == 1){
    Serial.print("DEBUG Write data to addr: ");
    Serial.println(addr);
  }
}

const char* parseDataFromCommandString(){
  const char* data;
  char* delim_char_ptr = strtok(receivedBytes, CMD_DELIMITER);

  if(delim_char_ptr != NULL){
    delim_char_ptr = strtok(NULL, CMD_DELIMITER);
    data = delim_char_ptr;
  }else{
    data = "";
  }

  return data;
}

