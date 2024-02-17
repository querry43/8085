#!vim noet

targets = \
	00-sod-high.hex \
	01-blink-sod.hex \
	02-set-control-reg.hex \
	03-bank-rom-ram.hex \
	04-march-memory-test.hex \
	05-software-serial-echo.hex

all: $(targets)

clean:
	rm -f *.hex *.rel

.phony: clean

%.rel: %.asm
	as8085 -o $<

%.hex: %.rel
	aslink -i $<

01-blink-sod.hex: 01-blink-sod.rel
	aslink -i -g stack=0xfff $<

02-set-control-reg.hex: 02-set-control-reg.rel
	aslink -i -g stack=0xfff $<

03-bank-rom-ram.hex: 03-bank-rom-ram.rel
	aslink -i -g stack=0xfff $<

04-march-memory-test.hex: 04-march-memory-test.rel
	aslink -i -g stack=0xffff -g memstart=0x850 -g memend=0xff00 -a data=0x800 -a code=0x40 $<

 05-software-serial-echo.hex:  05-software-serial-echo.rel
	aslink -i -g stack=0xffff -a code=0x40 -a interrupt5=0x2c -a data=0x800 $<
