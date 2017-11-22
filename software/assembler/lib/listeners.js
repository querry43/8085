"use strict";

const antlr4 = require('antlr4/index');
const asm8085Listener = require('./grammar/asm8085Listener');
const operands = require('./operands');
const operations = require('./operations');
const serialijse = require("serialijse");
const utils = require('./utils');

serialijse.declarePersistable(operations.Directive);
serialijse.declarePersistable(operations.Instruction);
serialijse.declarePersistable(operands.Add);
serialijse.declarePersistable(operands.Bin);
serialijse.declarePersistable(operands.Dec);
serialijse.declarePersistable(operands.Div);
serialijse.declarePersistable(operands.Hex);
serialijse.declarePersistable(operands.Label);
serialijse.declarePersistable(operands.LocationCounter);
serialijse.declarePersistable(operands.Mod);
serialijse.declarePersistable(operands.Mult);
serialijse.declarePersistable(operands.Oct);
serialijse.declarePersistable(operands.Str);
serialijse.declarePersistable(operands.Sub);

class AsmListener extends asm8085Listener.asm8085Listener {
  constructor() {
    super();
    this.instructions = [];
    this.address = 0;
    this.symbolTable = {};
    this.file = null;
  }

  toHex() {
    var output = '';
    var self = this;

    self.instructions.forEach(function(instruction) {
      output = output + instruction.toHex(self.symbolTable);
    });

    return output;
  }

  toString() {
    var output = '';
    var self = this;

    output = output + '// Symbol Table:\n';
    Object.keys(self.symbolTable).sort().forEach(function(property) {
      output = output
        + '//   ' + utils.formatLabel(property) + ' ' + utils.formatHex(self.symbolTable[property], 4) + '\n';
    });

    output = output + '\n\n';

    self.instructions.forEach(function(instruction) {
      output = output + instruction.toString(self.symbolTable) + '\n';
    });

    return output;
  }

  toJSON() {
    return serialijse.serialize({
      instructions: this.instructions,
      address: this.address,
      symbolTable: this.symbolTable,
      file: this.file
    });
  }

  fromJSON(data) {
    var obj = serialijse.deserialize(data);
    this.instructions = obj.instructions;
    this.address = obj.address;
    this.symbolTable = obj.symbolTable;
    this.file = obj.file;
  }

  enterOperation(ctx) {
    this.label = null;
    this.op = [];
    this.immediates = [];
  };

  enterInstruction(ctx) {
    this.text = ctx.children.map(function(child) { return child.getText(); }).join(' ');
    this.op.push(ctx.getChild(0).getText());
  }


  exitInstruction(ctx) {
    var opEntry = operations.opTable[this.op];

    // console.log({'label': this.label, 'op': this.op, 'immediates': this.immediates, 'opEntry': opEntry });

    if (opEntry) {
      var instruction = new operations.Instruction(
        this.file,
        ctx.start.line,
        this.address,
        this.label,
        opEntry[1],
        this.text,
        opEntry[0],
        this.immediates[0]
      );

      this.instructions.push(instruction);

      this.address = this.address + instruction.length;
    } else {
      console.error('failed to parse instruction ' + this.text + ' line ' + ctx.start.line);
      process.exit(1);
    }
  };

  exitDS(ctx) {
    this.text = ctx.children.map(function(child) { return child.getText(); }).join(' ');

    // console.log({'label': this.label, 'op': this.op, 'immediates': this.immediates });

    var directive = new operations.Directive(
      this.file,
      ctx.start.line,
      this.address,
      this.label,
      this.immediates[0].toInt(),
      this.text,
      [ ]
    );

    this.instructions.push(directive);
    this.address = this.address + directive.length;
  }

  exitDB(ctx) {
    this.text = ctx.children.map(function(child) { return child.getText(); }).join(' ');
    var bytes = [];

    // console.log({'label': this.label, 'op': 'DB', 'immediates': this.immediates, 'bytes': bytes });

    var self = this;
    this.immediates.forEach(function(immediate) {
      var immediateBytes = immediate.toBytes(self.address, self.symbolTable);
      if (! (immediate instanceof operands.Str)) {
        immediateBytes = immediateBytes.reverse();
      }
      bytes = bytes.concat(immediateBytes);
    });

    var directive = new operations.Directive(
      this.file,
      ctx.start.line,
      this.address,
      this.label,
      bytes.length,
      this.text,
      bytes
    );

    this.instructions.push(directive);
    this.address = this.address + directive.length;
  }

  exitSET(ctx) {
    this.symbolTable[ctx.getChild(0).getText()] = this.immediates.pop().toInt(this.address, this.symbolTable);
  }

  exitPlus(ctx) {
    var right = this.immediates.pop();
    var left = this.immediates.pop();
    this.immediates.push(new operands.Add(left, right, ctx.getText()));
  }

  exitMinus(ctx) {
    var right = this.immediates.pop();
    var left = this.immediates.pop();
    this.immediates.push(new operands.Sub(left, right, ctx.getText()));
  }

  exitMult(ctx) {
    var right = this.immediates.pop();
    var left = this.immediates.pop();
    this.immediates.push(new operands.Mult(left, right, ctx.getText()));
  }

  exitDiv(ctx) {
    var right = this.immediates.pop();
    var left = this.immediates.pop();
    this.immediates.push(new operands.Div(left, right, ctx.getText()));
  }

  exitMod(ctx) {
    var right = this.immediates.pop();
    var left = this.immediates.pop();
    this.immediates.push(new operands.Mod(left, right, ctx.getText()));
  }

  exitRegister(ctx) { this.op.push(ctx.getText()); }

  exitHex(ctx) { this.immediates.push(operands.Hex.parse(ctx.getText())); }
  exitOct(ctx) { this.immediates.push(operands.Oct.parse(ctx.getText())); }
  exitBin(ctx) { this.immediates.push(operands.Bin.parse(ctx.getText())); }
  exitDec(ctx) { this.immediates.push(operands.Dec.parse(ctx.getText())); }
  exitStr(ctx) { this.immediates.push(operands.Str.parse(ctx.getText())); }

  exitLabel(ctx) {
    this.label = ctx.getChild(0).getText();
    if (this.symbolTable[this.label]) {
      console.error('redefinition of label ' + this.label);
      process.exit(1);
    }
    this.symbolTable[this.label] = this.address;
  }

  exitORG(ctx) { this.address = this.immediates[0].toInt(this.address, this.symbolTable); }

  exitLocationcounteroperand(ctx) { this.immediates.push(new operands.LocationCounter()); }

  exitLabeloperand(ctx) { this.immediates.push(new operands.Label(ctx.getChild(0).getText())); }
}

class DieOnErrorListener extends antlr4.error.ErrorListener {
  constructor(file) {
    super();
    this.file = file;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    console.error('Syntax error in ' + this.file + ':' + line + ':\n' + msg);
    process.exit(1);
  }
}

exports.AsmListener = AsmListener;
exports.DieOnErrorListener = DieOnErrorListener;

// vim: ts=2 sw=2 et
