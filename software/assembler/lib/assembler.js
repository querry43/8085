"use strict";

const ParseTreeWalker = require('antlr4/index').tree.ParseTreeWalker;
const InputStream = require('antlr4/index').InputStream;
const CommonTokenStream = require('antlr4/index').CommonTokenStream;
const fs = require('fs');
const path = require('path');
const asm8085Lexer = require('asm8085/asm8085Lexer').asm8085Lexer;
const asm8085Parser = require('asm8085/asm8085Parser').asm8085Parser;
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

  writeObjectFile(file) {
    var programName = path.basename(file).replace(/[\.-]/g, '_');
    fs.writeFileSync(
      file,
      '\nconst uint16_t ' + programName + '[] = {\n\n' + this.listener.toString() + '\n};\n\n'
    );
  }
}

exports.Assembler = Assembler;

// vim: ts=2 sw=2 et
