#!/usr/bin/env python

import sys, getopt, serial, time, os

def execute_command(serial_obj, command_str):
    print("\nexecuting command: " + command_str)
    serial_obj.write(command_str + '\n')
    got_ok = False
    while True:
        line = serial_obj.readline().rstrip()
        if (line[:2] == "OK"):
            got_ok = True
        if (not line):
            break
        print(line)
    if (not got_ok):
        raise Exception('Command ' + command_str + ' failed')

def usage():
    print("USAGE: " + os.path.basename(__file__) + " --port /dev/cu.usbmodem1411 --rom-size 1024 [--rom-offset 0] [--baud 38400] [--zero] [--read] [file1.hex ...]")
    sys.exit()

opts, args = getopt.getopt(sys.argv[1:], '', ['help','h','?','zero','debug','rom-size=','rom-offset=','port=','baud=', 'read'])

baud_rate = 38400
do_debug = False
do_mem_clear = False
do_read = False
rom_offset = "0"
rom_size = "2048"
serial_port = ""
timeout = 1

for o, v in opts:
    if o == "--zero":
        do_mem_clear = True
    elif o == "--rom-size":
        rom_size = v
    elif o == "--rom-offset":
        rom_offset = v
    elif o == "--debug":
        do_debug = True
    elif o == "--port":
        serial_port = v
    elif o == "--baud":
        baud_rate = v
    elif o == "--read":
        do_read = True
    elif o in ("--help", "-h", "-?"):
        usage()

line = ""

arduino_serial = serial.Serial(serial_port, baudrate=baud_rate, timeout=timeout)  # open serial port
print("Connecting to device: " + arduino_serial.name)
time.sleep(timeout)

if(do_debug):
    execute_command(arduino_serial, 'd')

execute_command(arduino_serial, 'm|' + rom_size)
execute_command(arduino_serial, 'o|' + rom_offset)

execute_command(arduino_serial, 'h')

if(do_mem_clear):
    execute_command(arduino_serial, 'z')

if(len(args) > 0):
    for f_path in args:
        with open(f_path) as f:
            f_lines = f.readlines()
        for line in f_lines:
            execute_command(arduino_serial, 'w|' + line)

if(do_read):
    execute_command(arduino_serial, 'r')

execute_command(arduino_serial, 'l')

arduino_serial.close()
