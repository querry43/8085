var antlr4 = require('antlr4/index');
var asm8085Lexer = require('./asm8085Lexer.js');
var asm8085Parser = require('./asm8085Parser.js');
var asm8085Listener = require('./asm8085Listener.js');
const fs = require('fs');

var inputs = process.argv.slice(2);

function AsmListener() {
  asm8085Listener.asm8085Listener.call(this);
  return this;
}

AsmListener.prototype = Object.create(asm8085Listener.asm8085Listener.prototype);
AsmListener.prototype.constructor = AsmListener;

// ctx -> http://www.antlr.org/api/Java/org/antlr/v4/runtime/RuleContext.html

AsmListener.prototype.exitInstruction = function(ctx) {
  console.log(ctx.getText());
};

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
});

// vim: ts=2 sw=2 et ai
