"use strict"

var antlr4 = require('antlr4/index');
var asm8085Lexer = require('./asm8085Lexer.js');
var asm8085Parser = require('./asm8085Parser.js');
var asm8085Listener = require('./asm8085Listener.js');
const fs = require('fs');
const util = require('util');

var inputs = process.argv.slice(2);

class Instruction {
  constructor(label, opcode, operands, length, text) {
    this.label = label;
    this.opcode = opcode;
    this.operands = operands;
    this.length = length;
    this.text = text;
  }

  toString() {
    function formatLabel(l) {
      var width = 10;
      if (l) {
        return l + ':' + Array(width - l.length - 1).join(' ');
      } else {
        return Array(width).join(' ');
      }
    }

    function formatHex(d) {
      var hex = d.toString(16);
      return '0x' + (hex.length == 1 ? '0' + hex : hex);
    }

    var opstring = util.format(
      '%s %s // %s',
      formatLabel(this.label),
      formatHex(this.opcode),
      this.text
    );

    if (this.length == 2) {
      opstring = opstring + util.format(
        '\n%s %s',
        formatLabel(null),
        '0x00'
      );
    } else if (this.length == 3) {
      opstring = opstring + util.format(
        '\n%s %s',
        formatLabel(null),
        '0x00'
      );
      opstring = opstring + util.format(
        '\n%s %s',
        formatLabel(null),
        '0x00'
      );
    }

    return opstring;
  }
}

class AsmListener extends asm8085Listener.asm8085Listener {
  constructor() {
    super();
    this.instructions = [];
  }

  addInstruction(ctx, opcode, length) {
    this.instructions.push(new Instruction(
      this.label,
      opcode,
      this.operands,
      length,
      ctx.children.map(function(child) { return child.getText(); }).join(' ')
    ));
  }

  addOperand(type, ctx) {
    this.operands.push({
      'type': type,
      'value': ctx.getChild(0).getText(),
    });
  }
  
  enterInstruction(ctx) {
    this.label = null;
    this.operands = [];
  };
  
  exitLabel(ctx) {
    this.label = ctx.getChild(0).getText();
  }
  
  exitCall(ctx) {
    this.addInstruction(ctx, 0xCD, 3);
  }

  exitJmp(ctx) {
    this.addInstruction(ctx, 0xC3, 3);
  }
  
  exitLxi(ctx) {
    var opcodes = {
      'B': 0x01,
      'D': 0x11,
      'H': 0x21,
      'SP': 0x31,
    };
  
    this.addInstruction(ctx, opcodes[ctx.getChild(1).getText()], 3);
  }
  
  exitMvi(ctx) {
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
  
  exitSim(ctx) {
    this.addInstruction(ctx, 0x30, 1);
  }
  
  
  exitHex(ctx) {
    this.addOperand('hex', ctx);
  }
  
  exitOct(ctx) {
    this.addOperand('oct', ctx);
  }
  
  exitBin(ctx) {
    this.addOperand('bin', ctx);
  }
  
  exitLabeloperand(ctx) {
    this.addOperand('label', ctx);
  }
}

fs.readFile(inputs[0], 'utf8', function (err,data) {
  if (err) { return console.log(err); }
  console.log('Input:\n' + data);

  var chars = new antlr4.InputStream(data);
  var lexer = new asm8085Lexer.asm8085Lexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new asm8085Parser.asm8085Parser(tokens);
  var tree = parser.prog();

  var assembler = new AsmListener();
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(assembler, tree);

  // console.log(JSON.stringify(assembler.instructions, null, 2));

  console.log('Output:');
  assembler.instructions.forEach(function(instruction) {
    console.log(instruction.toString());
  });
});

// vim: ts=2 sw=2 et ai
