#pragma once

#define CMD_SIZE 128
#define BAUD 38400

#include <string.h>
#include "hardware_interface.h"

void setup_serial_interface();
void serial_interface_loop();
