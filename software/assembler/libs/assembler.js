"use strict";

const ParseTreeWalker = require('antlr4/index').tree.ParseTreeWalker;
const InputStream = require('antlr4/index').InputStream;
const CommonTokenStream = require('antlr4/index').CommonTokenStream;
const fs = require('fs');
const path = require('path');
const asm8085Lexer = require('./grammar/asm8085Lexer').asm8085Lexer;
const asm8085Parser = require('./grammar/asm8085Parser').asm8085Parser;
const DieOnErrorListener = require('./listeners').DieOnErrorListener;

class Assembler {
  constructor(listener) {
    this.listener = listener;
  }

  readAsmFile(file) {
    var data = fs.readFileSync(file, 'utf8');

    var chars = new InputStream(data);
    var lexer = new asm8085Lexer(chars);

    lexer.removeErrorListeners();
    lexer.addErrorListener(new DieOnErrorListener(file));

    var tokens = new CommonTokenStream(lexer);
    var parser = new asm8085Parser(tokens);
    var tree = parser.prog();

    this.listener.file = file;

    ParseTreeWalker.DEFAULT.walk(this.listener, tree);
  }

  writeHexFile(file) {
    fs.writeFileSync(file, this.listener.toHex() + ':00000001FF\n');
  }

  writeTextFile(file) {
    var programName = path.basename(file).replace(/[\.-]/g, '_');
    fs.writeFileSync(
      file,
      '\nconst uint16_t ' + programName + '[] = {\n\n' + this.listener.toString() + '\n};\n\n'
    );
  }

  writeSymbolFile(file) {
    var output = '';
    var self = this;

    Object.keys(self.listener.symbolTable).sort().forEach(function(property) {
      output = output
        + property + ' SET ' + self.listener.symbolTable[property] + '\n';
    });

    fs.writeFileSync(file, output);
  }
}

exports.Assembler = Assembler;

// vim: ts=2 sw=2 et
