#!vim noet

targets = monitor.hex

all: $(targets)

clean:
	rm -f *.hex *.rel

.phony: clean

%.rel: %.asm
	as8085 -o $<

monitor.hex: main.rel serial.rel
	aslink -n -i -g stack=0xffff -a code=0x40 -a interrupt5=0x2c -a data=0x800 $?
