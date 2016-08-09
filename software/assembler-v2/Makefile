TARGETS = \
    asm8085Lexer.js \
    asm8085Lexer.tokens \
    asm8085Listener.js \
    asm8085Parser.js \
    asm8085.tokens

js_runtime = antlr-javascript-runtime-4.5.3.zip
antlr_jar = antlr-4.5.3-complete.jar

ANTLR = java -jar ${antlr_jar}
NODEJS = nodejs

all: ${TARGETS}

test: 
	${NODEJS} assembler.js test/*.asm

%Lexer.js %Lexer.tokens %Listener.js %Parser.js %.tokens: %.g4 deps
	${ANTLR} -Dlanguage=JavaScript $<

deps: node_modules/antlr4/index.js ${antlr_jar}

${antlr_jar}:
	wget http://www.antlr.org/download/${antlr_jar}

node_modules/antlr4/index.js:
	mkdir -p node_modules
	wget --output-document node_modules/${js_runtime} http://www.antlr.org/download/${js_runtime}
	unzip -d node_modules node_modules/${js_runtime}

clean:
	rm -f ${TARGETS}

distclean: clean
	rm -f ${antlr_jar}
	rm -rf node_modules

.PHONY: all test deps clean distclean

# vim: noet
