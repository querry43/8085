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

bootloader.hex bootloader-symbols.asm: bootloader.asm
	${ASSEMBLE} --hex bootloader.hex --symbol bootloader-symbols.asm $^

game.hex: functions/delay.asm
	${ASSEMBLE} --hex $@ bootloader.asm game.asm functions/delay.asm


larson_scanner.hex: functions/delay.asm bootloader-symbols.asm

reversi/reversi.hex: reversi/board.asm bootloader-symbols.asm
reversi/test/test_1_board.hex: reversi/board.asm
reversi/test/test_2_eval.hex: reversi/eval.asm reversi/board.asm
reversi/test/test_3_load_workspace.hex: reversi/eval.asm reversi/board.asm

test/8155-output.hex: bootloader-symbols.asm
test/blink-sod.hex: functions/delay.asm
test/sod-high.hex: bootloader-symbols.asm

%.hex : %.asm
	${ASSEMBLE} --hex $@ $^

clean:
	rm -f *.h *.hex ${ASM}

distclean: clean
	rm -f bootloader-symbols.asm

.PHONY: all clean distclean

# vim: noet
