TARGETS = \
	programs/blink.asm.h

all: ${TARGETS}

programs/blink.asm.h: programs/blink.asm libs/delay.asm

%.asm.h : %.asm
	./assembler.pl $^ > $@

clean:
	rm -f ${TARGETS}

.PHONY: all clean
