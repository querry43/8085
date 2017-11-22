"use strict";

const ParseTreeWalker = require('antlr4/index').tree.ParseTreeWalker;
const InputStream = require('antlr4/index').InputStream;
const CommonTokenStream = require('antlr4/index').CommonTokenStream;
const fs = require('fs');
const path = require('path');
const asm8085Lexer = require('./grammar/asm8085Lexer').asm8085Lexer;
const asm8085Parser = require('./grammar/asm8085Parser').asm8085Parser;
const DieOnErrorListener = require('./listeners').DieOnErrorListener;
const AsmListener = require('./listeners').AsmListener;

class Assembler {
  constructor() {
    this.listener = new AsmListener();
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

  readObjFile(file) {
    var data = fs.readFileSync(file, 'utf8');
    this.listener.file = file;
    this.listener.fromJSON(data);
  }

  writeObjFile(file) {
    fs.writeFileSync(file, this.listener.toJSON());
  }

  writeHexFile(file) {
    fs.writeFileSync(file, this.listener.toHex() + ':00000001FF\n');
  }

  instructions() { return this.listener.instructions; }
  instruction(i) { return this.listener.instructions[i]; }
}

exports.Assembler = Assembler;

// vim: ts=2 sw=2 et
