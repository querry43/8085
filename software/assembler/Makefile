GRAMMAR = \
    libs/grammar/asm8085Listener.js

TEST_ASM = \
	tests/test-asm/all.asm.h

js_runtime = antlr-javascript-runtime-4.5.3.zip
antlr_jar = antlr-4.5.3-complete.jar

ANTLR = java -jar java/${antlr_jar}
NODEJS = node

all:

grammar: ${GRAMMAR}

test: node_modules/antlr4/index.js ${TEST_ASM}
	diff -u tests/test-asm/all.asm.h tests/test-asm/all.asm.h.expected

tests/test-asm/all.asm.h: tests/test-asm/*.asm
	${NODEJS} assemble $@ $^

%.asm.h : %.asm
	${NODEJS} assemble $@ $^

libs/grammar/asm8085Listener.js: libs/grammar/asm8085.g4 node_modules/antlr4/index.js java/${antlr_jar}
	${ANTLR} -Dlanguage=JavaScript libs/grammar/asm8085.g4

deps: node_modules/antlr4/index.js java/${antlr_jar}

java/${antlr_jar}:
	mkdir -p java
	wget --output-document $@ http://www.antlr.org/download/${antlr_jar}

node_modules/antlr4/index.js:
	npm install

clean:
	rm -f ${TARGETS} ${TEST_ASM}

distclean: clean
	rm -rf java
	rm -rf node_modules

.PHONY: all asm test deps clean distclean ${GRAMMAR}

# vim: noet
