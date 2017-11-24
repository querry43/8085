"use strict";

const serialijse = require('serialijse');
const fs = require('fs');
require('./serialize');

class Linker {
  constructor() {
    this.instructions = [];
    this.symbolTable = {};
  }

  readObjFile(file) {
    var obj = serialijse.deserialize(fs.readFileSync(file, 'utf8'));
    this.instructions = obj.instructions;
    this.symbolTable = obj.symbolTable;
  }

  toHex() {
    var output = '';
    var self = this;

    self.instructions.forEach(function(instruction) {
      output = output + instruction.toHex(self.symbolTable);
    });

    return output;
  }

}

exports.Linker = Linker;

// vim: ts=2 sw=2 et
