ASM = \
       blink.asm.h \
       larson_scanner.asm.h \
       larson_scanner2.asm.h \
       light_on.asm.h \
       noop.asm.h \
       output-8155.asm.h \
       reversi/reversi.asm.h \
       reversi/test/test_1_board.asm.h \
       reversi/test/test_2_eval.asm.h

ASSEMBLE = ../assembler/assemble

all: ${ASM}

output-8155.asm.h: output-8155.asm libs/addresses.asm
blink.asm.h: blink.asm libs/delay.asm
larson_scanner.asm.h: larson_scanner.asm libs/delay.asm libs/addresses.asm
larson_scanner2.asm.h: larson_scanner2.asm libs/delay.asm libs/addresses.asm
reversi/reversi.asm.h: reversi/reversi.asm reversi/board.asm libs/addresses.asm
reversi/test/test_1_board.asm.h: reversi/test/test_1_board.asm reversi/board.asm
reversi/test/test_2_eval.asm.h: reversi/test/test_2_eval.asm reversi/eval.asm reversi/board.asm
reversi/test/test_3_load_workspace.asm.h: reversi/test/test_3_load_workspace.asm reversi/eval.asm reversi/board.asm

%.asm.h : %.asm
	${ASSEMBLE} --hex /dev/null --text $@ $^

clean:
	rm -f ${ASM}

.PHONY: all clean

# vim: noet
