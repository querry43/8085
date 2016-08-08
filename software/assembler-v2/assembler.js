var antlr4 = require('antlr4/index');
var asm8085Lexer = require('./asm8085Lexer.js');
var asm8085Parser = require('./asm8085Parser.js');
var asm8085Listener = require('./asm8085Listener.js');
const fs = require('fs');

var inputs = process.argv.slice(2);

function AsmListener() {
  asm8085Listener.asm8085Listener.call(this);
  this.instructions = []
  return this;
}

AsmListener.prototype = Object.create(asm8085Listener.asm8085Listener.prototype);
AsmListener.prototype.constructor = AsmListener;

AsmListener.prototype.addInstruction = function(ctx, opcode, length) {
  this.instructions.push({
    'text': ctx.children.map(function(child) { return child.getText(); }).join(' '),
    'operands': this.operands,
    'opcode': opcode,
    'length': length,
  });
}

AsmListener.prototype.enterInstruction = function(ctx) {
  this.operands = [];
};

AsmListener.prototype.exitLabel = function(ctx) {
  this.label = ctx.getChild(0).getText();
}

AsmListener.prototype.exitCall = function(ctx) {
  this.addInstruction(ctx, 0xCD, 3);
}

AsmListener.prototype.exitJmp = function(ctx) {
  this.addInstruction(ctx, 0xC3, 3);
}

AsmListener.prototype.exitLxi = function(ctx) {
  var opcodes = {
    'B': 0x01,
    'D': 0x11,
    'H': 0x21,
    'SP': 0x31,
  };

  this.addInstruction(ctx, opcodes[ctx.getChild(1).getText()], 3);
}

AsmListener.prototype.exitMvi = function(ctx) {
  var opcodes = {
    'A': 0x3E,
    'B': 0x06,
    'C': 0x0E,
    'D': 0x16,
    'E': 0x1E,
    'H': 0x26,
    'L': 0x2E,
    'M': 0x36,
  };

  this.addInstruction(ctx, opcodes[ctx.getChild(1).getText()], 2);
}

AsmListener.prototype.exitSim = function(ctx) {
  this.addInstruction(ctx, 0x30, 1);
}


AsmListener.prototype.exitHex = function(ctx) {
  this.operands.push({'hex' : ctx.getText()});
}

AsmListener.prototype.exitOct = function(ctx) {
  this.operands.push({'oct' : ctx.getText()});
}

AsmListener.prototype.exitBin = function(ctx) {
  this.operands.push({'bin' : ctx.getText()});
}

AsmListener.prototype.exitLabeloperand = function(ctx) {
  this.operands.push({'label' : ctx.getText()});
}

fs.readFile(inputs[0], 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);

  var chars = new antlr4.InputStream(data);
  var lexer = new asm8085Lexer.asm8085Lexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new asm8085Parser.asm8085Parser(tokens);
  parser.buildParseTrees = true;
  var tree = parser.prog();

  var assembler = new AsmListener();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(assembler, tree);
  console.log(JSON.stringify(assembler.instructions, null, 2));
});

// vim: ts=2 sw=2 et ai
