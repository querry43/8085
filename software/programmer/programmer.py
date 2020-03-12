#!/usr/bin/env python

import sys, getopt, time, os
from serial import Serial

class Programmer:
    def __init__(self, port, baudrate, timeout):
        self.timeout = timeout
        self.__open_serial(port, baudrate, self.timeout)

    def toggle_debug(self):
        self.__execute_command('d');

    def set_rom_size(self, size):
        self.__execute_command('m|' + str(size))

    def set_rom_offset(self, offset):
        self.__execute_command('o|' + str(offset))

    def zero_rom(self):
        self.__execute_command('z')

    def read_rom(self):
        self.__execute_command('r')

    def write_rom(self, hex_line):
        self.__execute_command('w|' + hex_line)

    def hold_bus(self):
        self.__execute_command('h')

    def release_bus(self):
        self.__execute_command('l')

    def __open_serial(self, port, baudrate, timeout):
        self.serial_obj = Serial(port=port, baudrate=baudrate, timeout=timeout)
        print("Connecting to device: " + self.serial_obj.name + " (" + str(baudrate) + ")")
        time.sleep(timeout)
        self.__execute_command('p')

    def __execute_command(self, command_str):
        print("executing command: " + command_str)
        self.serial_obj.write((command_str + '\n').encode('ascii'))
        got_ok = False
        while True:
            line = self.serial_obj.readline().rstrip()
            print(line)
            if (line[:2] == b'OK'):
                got_ok = True
                break
            if (not line):
                break
        if (not got_ok):
            raise Exception('Command ' + command_str + ' failed')

def usage():
    print("USAGE: " + os.path.basename(__file__) + " --port /dev/cu.usbmodem1411 [--rom-size 2048] [--rom-offset 0] [--baud 38400] [--zero] [--read] [file1.hex ...]")
    sys.exit()

def main():
    opts, args = getopt.getopt(
        sys.argv[1:],
        '',
        ['help','h','?','zero','debug','rom-size=','rom-offset=','port=','baud=', 'read']
    )

    baudrate = 38400
    port = None
    timeout = 1

    rom_offset = 0
    rom_size = 2048

    do_debug = False
    do_zero_rom = False
    do_read = False

    for o, v in opts:
        if o == "--port":
            port = v
        elif o == "--baud":
            baudrate = int(v)

        elif o == "--rom-size":
            rom_size = int(v)
        elif o == "--rom-offset":
            rom_offset = int(v)

        elif o == "--debug":
            do_debug = True
        elif o == "--zero":
            do_zero_rom = True
        elif o == "--read":
            do_read = True
        elif o in ("--help", "-h", "-?"):
            usage()

    if port is None:
        usage()

    programmer = Programmer(
        port = port,
        baudrate = baudrate,
        timeout = timeout
    )

    if(do_debug):
        programmer.toggle_debug()

    programmer.set_rom_size(rom_size)
    programmer.set_rom_offset(rom_offset)
    programmer.hold_bus()

    if(do_zero_rom):
        programmer.zero_rom()

    for f_path in args:
        with open(f_path, 'r') as f:
            for line in f:
                programmer.write_rom(line)

    if(do_read):
        programmer.read_rom()

    programmer.release_bus()

if __name__ == "__main__":
    main()

