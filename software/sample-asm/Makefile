ASM = \
       bootloader.hex \
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
LINK = ../assembler/link

all: ${ASM}

bootloader.hex: bootloader.asm
	${ASSEMBLE} --object bootloader.obj $^
	${LINK} --hex $@ bootloader.obj

game.hex: functions/delay.asm
	${ASSEMBLE} --object $*.obj bootloader.asm game.asm functions/delay.asm
	${LINK} --hex $@ $*.obj

serial-control.hex: functions/delay.asm
	${ASSEMBLE} --object $*.obj bootloader.asm serial-control.asm
	${LINK} --hex $@ $*.obj


larson_scanner.hex: functions/delay.asm bootloader.asm

reversi/reversi.hex: reversi/board.asm bootloader.asm
reversi/test/test_1_board.hex: reversi/board.asm
reversi/test/test_2_eval.hex: reversi/eval.asm reversi/board.asm
reversi/test/test_3_load_workspace.hex: reversi/eval.asm reversi/board.asm

test/8155-output.hex: bootloader.asm
test/blink-sod.hex: functions/delay.asm
test/sod-high.hex: bootloader.asm

%.hex : %.asm
	${ASSEMBLE} --object $*.obj $^
	${LINK} --hex $@ $*.obj

clean:
	rm -f *.h *.hex *.obj ${ASM}

.PHONY: all clean distclean

# vim: noet
