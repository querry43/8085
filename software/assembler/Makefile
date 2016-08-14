TARGETS = \
    node_modules/asm8085/asm8085Listener.js

ASM = \
	asm/blink.asm.h \
	asm/larson_scanner.asm.h \
	asm/larson_scanner2.asm.h \
	asm/light_on.asm.h \
	asm/multiplex_output.asm.h \
	asm/noop.asm.h \
	asm/output.asm.h \
	asm/reversi/reversi.asm.h \
	asm/reversi/test/test_1_board.asm.h

js_runtime = antlr-javascript-runtime-4.5.3.zip
antlr_jar = antlr-4.5.3-complete.jar

ANTLR = java -jar java/${antlr_jar}
NODEJS = nodejs

all: ${TARGETS}

asm: ${ASM}

asm/output.asm.h: asm/output.asm asm/libs/addresses.asm
asm/blink.asm.h: asm/blink.asm asm/libs/delay.asm
asm/larson_scanner.asm.h: asm/larson_scanner.asm asm/libs/delay.asm asm/libs/addresses.asm
asm/larson_scanner2.asm.h: asm/larson_scanner2.asm asm/libs/delay.asm asm/libs/addresses.asm
asm/multiplex_output.asm.h: asm/multiplex_output.asm asm/libs/delay.asm asm/libs/addresses.asm

asm/reversi/reversi.asm.h: asm/reversi/reversi.asm asm/reversi/board.asm asm/libs/delay.asm asm/libs/addresses.asm
asm/reversi/test/test_1_board.asm.h: asm/reversi/test/test_1_board.asm asm/reversi/board.asm


test: 
	${NODEJS} assembler.js asm/test/*.asm

%.asm.h : %.asm
	${NODEJS} assembler.js $^ > $@

node_modules/asm8085/asm8085Listener.js: asm8085.g4 node_modules/antlr4/index.js java/${antlr_jar}
	mkdir -p node_modules/asm8085
	${ANTLR} -Dlanguage=JavaScript -o node_modules/asm8085 $<

deps: node_modules/antlr4/index.js java/${antlr_jar}

java/${antlr_jar}:
	mkdir -p java
	wget --output-document $@ http://www.antlr.org/download/${antlr_jar}

node_modules/antlr4/index.js:
	mkdir -p node_modules
	wget --output-document node_modules/${js_runtime} http://www.antlr.org/download/${js_runtime}
	unzip -d node_modules node_modules/${js_runtime}

clean:
	rm -f ${TARGETS}
	rm -rf node_modules/asm8085

distclean: clean
	rm ${ASM}
	rm -rf java
	rm -rf node_modules

.PHONY: all asm test deps clean distclean

# vim: noet
