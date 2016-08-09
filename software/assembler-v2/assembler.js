"use strict"

var antlr4 = require('antlr4/index');
var asm8085Lexer = require('./asm8085Lexer.js');
var asm8085Parser = require('./asm8085Parser.js');
var asm8085Listener = require('./asm8085Listener.js');
const fs = require('fs');
const util = require('util');

var inputs = process.argv.slice(2);

class Operand {
  constructor(value) { this.value = value; }
  toString() { return this.value; }
  toBytes(programCounter, symbolTable) { return this.value.toString(16).match(/.{1,2}/g); }
}

class HexOperand extends Operand {
  constructor(value) { super(parseInt(value.slice(0, -1), 16)); }
  toString() { return '0x' + this.value.toString(16); }
}

class OctOperand extends Operand {
  constructor(value) { super(parseInt(value.slice(0, -1), 8)); }
  toString() { return '0' + this.value.toString(8); }
}

class BinOperand extends Operand {
  constructor(value) { super(parseInt(value.slice(0, -1), 2)); }
  toString() { return '0b' + this.value.toString(2); }
}

class DecOperand extends Operand {
  constructor(value) {
    if (value.slice(-1) == 'D') {
      super(parseInt(value.slice(0, -1)));
    } else {
      super(parseInt(value));
    }
  }
}

class ChrOperand extends Operand {
  constructor(value) { super(value.charCodeAt(1)); }
}

class LabelOperand extends Operand {
  toBytes(programCounter, symbolTable) {
    var addy = symbolTable[this.value];
    if (!addy) {
      console.error('unable to find address ' + this.value);
      process.exit(1);
    }
    return addy.toString(16).match(/.{1,2}/g);
  }
}

class LocationCounterOperand extends Operand {
  constructor() { super('$'); }
  toBytes(programCounter, symbolTable) {
    return programCounter.toString(16).match(/.{1,2}/g);
  }
}

class Instruction {
  constructor(label, opcode, operands, length, text, address) {
    this.label = label;
    this.opcode = opcode;
    this.operands = operands;
    this.length = length;
    this.text = text;
    this.address = address;
  }

  toString(symbolTable) {
    function formatLabel(l) {
      var width = 8;
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
      '%s, %s, // %s %s',
      formatHex(this.address),
      formatHex(this.opcode),
      formatLabel(this.label),
      this.text
    );

    if (this.length == 2) {
      var bytes = this.operands[0].toBytes(this.address, symbolTable)
      opstring = opstring + util.format(
        '\n%s, %s, //',
        formatHex(this.address+1),
        formatHex(bytes[0] || 0)
      );
    } else if (this.length == 3) {
      var bytes = this.operands[0].toBytes(this.address, symbolTable)
      opstring = opstring + util.format(
        '\n%s, %s, //\n%s, %s, //',
        formatHex(this.address+1),
        formatHex(bytes[0] || 0),
        formatHex(this.address+2),
        formatHex(bytes[1] || 0)
      );
    }

    return opstring;
  }
}

class AsmListener extends asm8085Listener.asm8085Listener {
  constructor() {
    super();
    this.instructions = [];
    this.address = 0x44;
    this.symbolTable = {};
  }

  addInstruction(ctx, opcode, length) {
    var instruction = new Instruction(
      this.label,
      opcode,
      this.operands,
      length,
      ctx.children.map(function(child) { return child.getText(); }).join(' '),
      this.address
    );

    this.instructions.push(instruction);

    if (this.label) {
      this.symbolTable[this.label] = this.address;
    }

    this.address = this.address + instruction.length;
  }

  enterInstruction(ctx) {
    this.label = null;
    this.operands = [];
  };

  exitCall(ctx) { this.addInstruction(ctx, 0xCD, 3); }

  exitJmp(ctx) { this.addInstruction(ctx, 0xC3, 3); }

  exitLxi(ctx) {
    var opcode = {
      'B': 0x01,
      'D': 0x11,
      'H': 0x21,
      'SP': 0x31,
    }[ctx.getChild(1).getText()];

    if (!opcode) {
      console.error('failed to parse instruction on line ' + ctx.start.line);
      process.exit(1);
    }

    this.addInstruction(ctx, opcode, 3);
  }

  exitMov(ctx) {
    var opcode = {
      'A': { 'A': 0x7F, 'B': 0x78, 'C': 0x79, 'D': 0x7A, 'E': 0x7B, 'H': 0x7C, 'L': 0x7D, 'M': 0x7E, },
      'B': { 'A': 0x47, 'B': 0x40, 'C': 0x41, 'D': 0x42, 'E': 0x43, 'H': 0x44, 'L': 0x45, 'M': 0x46, },
      'C': { 'A': 0x4F, 'B': 0x48, 'C': 0x49, 'D': 0x4A, 'E': 0x4B, 'H': 0x4C, 'L': 0x4D, 'M': 0x4E, },
      'D': { 'A': 0x57, 'B': 0x50, 'C': 0x51, 'D': 0x52, 'E': 0x53, 'H': 0x54, 'L': 0x55, 'M': 0x56, },
      'E': { 'A': 0x5F, 'B': 0x58, 'C': 0x59, 'D': 0x5A, 'E': 0x5B, 'H': 0x5C, 'L': 0x5D, 'M': 0x5E, },
      'H': { 'A': 0x67, 'B': 0x60, 'C': 0x61, 'D': 0x62, 'E': 0x63, 'H': 0x64, 'L': 0x65, 'M': 0x66, },
      'L': { 'A': 0x6F, 'B': 0x68, 'C': 0x69, 'D': 0x6A, 'E': 0x6B, 'H': 0x6C, 'L': 0x6D, 'M': 0x6E, },
      'M': { 'A': 0x77, 'B': 0x70, 'C': 0x71, 'D': 0x72, 'E': 0x73, 'H': 0x74, 'L': 0x75, },
    }[ctx.getChild(1).getText()][ctx.getChild(3).getText()];

    if (!opcode) {
      console.error('failed to parse instruction on line ' + ctx.start.line);
      process.exit(1);
    }

    this.addInstruction(ctx, opcode, 1);
  }

  exitMvi(ctx) {
    var opcode = {
      'A': 0x3E,
      'B': 0x06,
      'C': 0x0E,
      'D': 0x16,
      'E': 0x1E,
      'H': 0x26,
      'L': 0x2E,
      'M': 0x36,
    }[ctx.getChild(1).getText()];

    if (!opcode) {
      console.error('failed to parse instruction on line ' + ctx.start.line);
      process.exit(1);
    }

    this.addInstruction(ctx, opcode, 2);
  }

  exitNop(ctx) { this.addInstruction(ctx, 0x00, 1); }
  exitSim(ctx) { this.addInstruction(ctx, 0x30, 1); }

  exitHex(ctx) { this.operands.push(new HexOperand(ctx.getText())); }
  exitOct(ctx) { this.operands.push(new OctOperand(ctx.getText())); }
  exitBin(ctx) { this.operands.push(new BinOperand(ctx.getText())); }
  exitDec(ctx) { this.operands.push(new DecOperand(ctx.getText())); }
  exitChr(ctx) { this.operands.push(new ChrOperand(ctx.getText())); }

  exitLabel(ctx) {
    this.label = ctx.getChild(0).getText();
    this.symbolTable[this.label] = this.address;
  }

  exitLocationcounteroperand(ctx) { this.operands.push(new LocationCounterOperand()) }

  exitLabeloperand(ctx) { this.operands.push(new LabelOperand(ctx.getChild(0).getText())); }
}

var assembler = new AsmListener();

assembler.instructions.push(
  new Instruction(
    null,
    0x31,
    [new DecOperand('4095')],
    3,
    'LXI SP , 4095',
    0x00
  ),
  new Instruction(
    null,
    0xC3,
    [new LabelOperand('START')],
    3,
    'JMP START',
    0x03
  )
);

inputs.forEach(function(file) {
  var data = fs.readFileSync(file, 'utf8');
  console.log('Input:\n' + data);
  
  var chars = new antlr4.InputStream(data);
  var lexer = new asm8085Lexer.asm8085Lexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new asm8085Parser.asm8085Parser(tokens);
  var tree = parser.prog();
  
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(assembler, tree);
  
  // console.log(JSON.stringify(assembler.instructions, null, 2));
});

console.log('Symbol Table:');
console.log(JSON.stringify(assembler.symbolTable, null, 2));

console.log('Output:');
assembler.instructions.forEach(function(instruction) {
  console.log(instruction.toString(assembler.symbolTable));
});

// vim: ts=2 sw=2 et ai
