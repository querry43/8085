#!vim noet

targets = mattmon.hex

as8085 = docker run -v "$$(pwd)":/opt/pwd asxxxx:latest as8085
aslink = docker run -v "$$(pwd)":/opt/pwd asxxxx:latest aslink

all: $(targets)

clean:
	rm -f *.hex *.rel *.map

%.rel: %.asm
	$(as8085) -o $<

mattmon.hex: mattmon.rel
	$(aslink) -n -i -m -w -g stack=0xffff -a interrupt5=0x2c -a code=0x40 -a data=0x800 -a bios=0x700 $?

program:
	minipro -p M48Z02 -w mattmon.hex -s --format ihex

.phony: clean program
