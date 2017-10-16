#!/usr/bin/env python

import sys, getopt, serial, time, os

def execute_command(serial_obj, command_str):
	print("executing command: " + command_str);
	serial_obj.write(command_str + '\n');
	line = serial_obj.readline()
	print("Result: " + line)
	if (line[:2] != "OK"):
		raise Exception('Command ' + command_str + ' failed')

def usage():
	print("USAGE: " + os.path.basename(__file__) + " --port /dev/cu.usbmodem1411 --rom-size 1024 [--baud 38400] [--zero] [file1.hex ...]")
	sys.exit()

opts, args = getopt.getopt(sys.argv[1:], '', ['help','h','?','zero','debug','rom-size=','port=','baud=', 'read='])

do_mem_clear = False;
do_debug = False;
rom_size = 0;
serial_port = "";
baud_rate = 38400;
addr_to_read = "";

for o, v in opts:
	if o == "--zero":
		do_mem_clear = True;
	elif o == "--rom-size":
		rom_size = v;
	elif o == "--debug":
		do_debug = True;
	elif o == "--port":
		serial_port = v;
	elif o == "--baud":
		baud_rate = v;
	elif o == "--read":
		addr_to_read = v;
	elif o in ("--help", "-h", "-?"):
		usage()

	# check for errors

line = "";

arduino_serial = serial.Serial(serial_port, baudrate=baud_rate, timeout=3)  # open serial port
print("Connecting to device: " + arduino_serial.name)
time.sleep(3)

if(rom_size > 0):
	execute_command(arduino_serial, 'm|' + rom_size);

execute_command(arduino_serial, 'h');

if(do_mem_clear):
	execute_command(arduino_serial, 'z');

if(len(args) > 0):
	for f_path in args:
		with open(f_path) as f:
			f_lines = f.readlines()
		for line in f_lines:
			execute_command(arduino_serial, 'w|' + line);

execute_command(arduino_serial, 'l');

arduino_serial.close()


#line = arduino_serial.read(arduino_serial.in_waiting)

#ser.write('z\n');
#time.sleep(5)
#line = ser.readline()
#line = ser.read(ser.inWaiting())
#print(line)
