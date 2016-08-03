TARGETS = \
	programs/blink.h

all: ${TARGETS}

programs/blink.h: programs/blink.asm libs/delay.asm
	./assembler.pl $^ > $@

clean:
	rm -f ${TARGETS}

.PHONY: all clean
