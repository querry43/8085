ASM = \
       bootloader.hex \
       game.hex \
       larson_scanner.hex \
       reversi/reversi.hex \
       reversi/test/test_1_board.hex \
       reversi/test/test_2_eval.hex \
       serial-control.hex \
       test/8155-output.hex \
       test/blink-sod.hex \
       test/noop.hex \
       test/sod-high.hex

ASSEMBLE = ../assembler/assemble

all: ${ASM}

bootloader.hex symbols.asm: bootloader.asm
	${ASSEMBLE} --hex bootloader.hex --symbol symbols.asm $^

game.hex: functions/delay.asm symbols.asm
larson_scanner.hex: functions/delay.asm symbols.asm

reversi/reversi.hex: reversi/board.asm symbols.asm
reversi/test/test_1_board.hex: reversi/board.asm
reversi/test/test_2_eval.hex: reversi/eval.asm reversi/board.asm
reversi/test/test_3_load_workspace.hex: reversi/eval.asm reversi/board.asm

test/8155-output.hex: symbols.asm
test/blink-sod.hex: functions/delay.asm
test/sod-high.hex: symbols.asm

%.hex : %.asm
	${ASSEMBLE} --hex $@ $^

clean:
	rm -f *.h *.hex ${ASM}

distclean: clean
	rm -f symbols.asm

.PHONY: all clean distclean

# vim: noet
