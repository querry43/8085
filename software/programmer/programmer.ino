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
    //Serial.print("DEBUG Handling this command: ");
    //Serial.println(receivedBytes);
  }

  // parse command and arg here
  const char cmd = receivedBytes[0];
  char* data = parseDataFromCommandString();

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
    Serial.print("DEBUG Done writing to memory");
  }
}

void _writeToMem(uint16_t addr, uint8_t data) {
  // Do things
  if(debugMode == 1){
    Serial.print("DEBUG Write data ");
    Serial.print(data);
    Serial.print(" to addr ");
    Serial.println(addr);
  }
}

void processHexLine(char * hex_line){
  char record_length[3];
  char start_addr[5];
  char byte_to_write[3];
  
  int i = 0;
  int len_iterator = 0;
  int addr_iterator = 0;
  int num_records = 0;
  
  uint16_t starting_addr;
  
  //Skip over the starting colon
  hex_line++;
  
  for(i = 0; i < 6; i++){
    if(i < 2){
      record_length[len_iterator] = *hex_line;
      len_iterator++;
    }else{
      start_addr[addr_iterator] = *hex_line;
      addr_iterator++;
    }
    hex_line++;    
  }
  record_length[2] = '\0';
  start_addr[4] = '\0';

  num_records = atoi(record_length);

  sscanf(start_addr, "%" SCNx16, &starting_addr);
  int mod;
  i = 0;
  int counter = 0;
  uint8_t data;
  byte_to_write[2] = '\0';
  while (i < num_records && *hex_line != '\0') { //Just a wee bit o' sanity checking
    mod = counter % 2;
    byte_to_write[mod] = *hex_line;

    if(mod == 1){
      sscanf(byte_to_write, "%" SCNx8, &data);
      _writeToMem(starting_addr, data);
      starting_addr++;
      i++;
    }
    counter++;
    hex_line++;
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
