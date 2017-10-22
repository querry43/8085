// mock out the hardware interface for testing, will
// compile for much smaller ardu boards
//#define MOCK_HARDWARE

#include "hardware_interface.h"
#include "serial_interface.h"

void setup() {
  setup_serial_interface();
}

void loop() {
  serial_interface_loop();
}
