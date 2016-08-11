TARGETS = \
    node_modules/asm8085/asm8085Listener.js

js_runtime = antlr-javascript-runtime-4.5.3.zip
antlr_jar = antlr-4.5.3-complete.jar

ANTLR = java -jar ${antlr_jar}
NODEJS = nodejs

all: ${TARGETS}

programs/blink.asm.h: programs/blink.asm libs/delay.asm
programs/larson_scanner.asm.h: programs/larson_scanner.asm libs/delay.asm
programs/larson_scanner2.asm.h: programs/larson_scanner2.asm libs/delay.asm


test: 
	${NODEJS} assembler.js test/*.asm

%.asm.h : %.asm
	${NODEJS} assembler.js $^ > $@

node_modules/asm8085/asm8085Listener.js: asm8085.g4 node_modules/antlr4/index.js ${antlr_jar}
	mkdir -p node_modules/asm8085
	${ANTLR} -Dlanguage=JavaScript -o node_modules/asm8085 $<

deps: node_modules/antlr4/index.js ${antlr_jar}

${antlr_jar}:
	wget http://www.antlr.org/download/${antlr_jar}

node_modules/antlr4/index.js:
	mkdir -p node_modules
	wget --output-document node_modules/${js_runtime} http://www.antlr.org/download/${js_runtime}
	unzip -d node_modules node_modules/${js_runtime}

clean:
	rm -f ${TARGETS}
	rm -rf node_modules/asm8085

distclean: clean
	rm -f ${antlr_jar}
	rm -rf node_modules

.PHONY: all test deps clean distclean

# vim: noet
