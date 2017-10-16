ASM = \
       blink.hex \
       larson_scanner.hex \
       larson_scanner2.hex \
       light_on.hex \
       noop.hex \
       output-8155.hex \
       reversi/reversi.hex \
       reversi/test/test_1_board.hex \
       reversi/test/test_2_eval.hex

ASSEMBLE = ../assembler/assemble

all: ${ASM}

output-8155.hex: output-8155.asm libs/addresses.asm
blink.hex: blink.asm libs/delay.asm
larson_scanner.hex: larson_scanner.asm libs/delay.asm libs/addresses.asm
larson_scanner2.hex: larson_scanner2.asm libs/delay.asm libs/addresses.asm
reversi/reversi.hex: reversi/reversi.asm reversi/board.asm libs/addresses.asm
reversi/test/test_1_board.hex: reversi/test/test_1_board.asm reversi/board.asm
reversi/test/test_2_eval.hex: reversi/test/test_2_eval.asm reversi/eval.asm reversi/board.asm
reversi/test/test_3_load_workspace.hex: reversi/test/test_3_load_workspace.asm reversi/eval.asm reversi/board.asm

%.hex : %.asm
	${ASSEMBLE} --hex $@ $^

clean:
	rm -f *.h *.hex ${ASM}

.PHONY: all clean

# vim: noet
