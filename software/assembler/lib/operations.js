"use strict";

const util = require('util');
const utils = require('./utils');

  
const opTable = {
  'NOP':      [ 0x00, 1 ], 'LXI,B':    [ 0x01, 3 ], 'STAX,B':   [ 0x02, 1 ], 'INX,B':    [ 0x03, 1 ],
  'INR,B':    [ 0x04, 1 ], 'DCR,B':    [ 0x05, 1 ], 'MVI,B':    [ 0x06, 2 ], 'RLC':      [ 0x07, 1 ],
  '':         [ 0x08, 0 ], 'DAD,B':    [ 0x09, 1 ], 'LDAX,B':   [ 0x0A, 1 ], 'DCX,B':    [ 0x0B, 1 ],
  'INR,C':    [ 0x0C, 1 ], 'DCR,C':    [ 0x0D, 1 ], 'MVI,C':    [ 0x0E, 2 ], 'RRC':      [ 0x0F, 1 ],
  '':         [ 0x10, 0 ], 'LXI,D':    [ 0x11, 3 ], 'STAX,D':   [ 0x12, 1 ], 'INX,D':    [ 0x13, 1 ],
  'INR,D':    [ 0x14, 1 ], 'DCR,D':    [ 0x15, 1 ], 'MVI,D':    [ 0x16, 2 ], 'RAL':      [ 0x17, 1 ],
  '':         [ 0x18, 0 ], 'DAD,D':    [ 0x19, 1 ], 'LDAX,D':   [ 0x1A, 1 ], 'DCX,D':    [ 0x1B, 1 ],
  'INR,E':    [ 0x1C, 1 ], 'DCR,E':    [ 0x1D, 1 ], 'MVI,E':    [ 0x1E, 2 ], 'RAR':      [ 0x1F, 1 ],
  'RIM':      [ 0x20, 1 ], 'LXI,H':    [ 0x21, 3 ], 'SHLD':     [ 0x22, 3 ], 'INX,H':    [ 0x23, 1 ],
  'INR,H':    [ 0x24, 1 ], 'DCR,H':    [ 0x25, 1 ], 'MVI,H':    [ 0x26, 2 ], 'DAA':      [ 0x27, 1 ],
  '':         [ 0x28, 0 ], 'DAD,H':    [ 0x29, 1 ], 'LHLD':     [ 0x2A, 3 ], 'DCX,H':    [ 0x2B, 1 ],
  'INR,L':    [ 0x2C, 1 ], 'DCR,L':    [ 0x2D, 1 ], 'MVI,L':    [ 0x2E, 2 ], 'CMA':      [ 0x2F, 1 ],
  'SIM':      [ 0x30, 1 ], 'LXI,SP':   [ 0x31, 3 ], 'STA':      [ 0x32, 3 ], 'INX,SP':   [ 0x33, 1 ],
  'INR,M':    [ 0x34, 1 ], 'DCR,M':    [ 0x35, 1 ], 'MVI,M':    [ 0x36, 2 ], 'STC':      [ 0x37, 1 ],
  '':         [ 0x38, 0 ], 'DAD,SP':   [ 0x39, 1 ], 'LDA':      [ 0x3A, 3 ], 'DCX,SP':   [ 0x3B, 1 ],
  'INR,A':    [ 0x3C, 1 ], 'DCR,A':    [ 0x3D, 1 ], 'MVI,A':    [ 0x3E, 2 ], 'CMC':      [ 0x3F, 1 ],
  'MOV,B,B':  [ 0x40, 1 ], 'MOV,B,C':  [ 0x41, 1 ], 'MOV,B,D':  [ 0x42, 1 ], 'MOV,B,E':  [ 0x43, 1 ],
  'MOV,B,H':  [ 0x44, 1 ], 'MOV,B,L':  [ 0x45, 1 ], 'MOV,B,M':  [ 0x46, 1 ], 'MOV,B,A':  [ 0x47, 1 ],
  'MOV,C,B':  [ 0x48, 1 ], 'MOV,C,C':  [ 0x49, 1 ], 'MOV,C,D':  [ 0x4A, 1 ], 'MOV,C,E':  [ 0x4B, 1 ],
  'MOV,C,H':  [ 0x4C, 1 ], 'MOV,C,L':  [ 0x4D, 1 ], 'MOV,C,M':  [ 0x4E, 1 ], 'MOV,C,A':  [ 0x4F, 1 ],
  'MOV,D,B':  [ 0x50, 1 ], 'MOV,D,C':  [ 0x51, 1 ], 'MOV,D,D':  [ 0x52, 1 ], 'MOV,D,E':  [ 0x53, 1 ],
  'MOV,D,H':  [ 0x54, 1 ], 'MOV,D,L':  [ 0x55, 1 ], 'MOV,D,M':  [ 0x56, 1 ], 'MOV,D,A':  [ 0x57, 1 ],
  'MOV,E,B':  [ 0x58, 1 ], 'MOV,E,C':  [ 0x59, 1 ], 'MOV,E,D':  [ 0x5A, 1 ], 'MOV,E,E':  [ 0x5B, 1 ],
  'MOV,E,H':  [ 0x5C, 1 ], 'MOV,E,L':  [ 0x5D, 1 ], 'MOV,E,M':  [ 0x5E, 1 ], 'MOV,E,A':  [ 0x5F, 1 ],
  'MOV,H,B':  [ 0x60, 1 ], 'MOV,H,C':  [ 0x61, 1 ], 'MOV,H,D':  [ 0x62, 1 ], 'MOV,H,E':  [ 0x63, 1 ],
  'MOV,H,H':  [ 0x64, 1 ], 'MOV,H,L':  [ 0x65, 1 ], 'MOV,H,M':  [ 0x66, 1 ], 'MOV,H,A':  [ 0x67, 1 ],
  'MOV,L,B':  [ 0x68, 1 ], 'MOV,L,C':  [ 0x69, 1 ], 'MOV,L,D':  [ 0x6A, 1 ], 'MOV,L,E':  [ 0x6B, 1 ],
  'MOV,L,H':  [ 0x6C, 1 ], 'MOV,L,L':  [ 0x6D, 1 ], 'MOV,L,M':  [ 0x6E, 1 ], 'MOV,L,A':  [ 0x6F, 1 ],
  'MOV,M,B':  [ 0x70, 1 ], 'MOV,M,C':  [ 0x71, 1 ], 'MOV,M,D':  [ 0x72, 1 ], 'MOV,M,E':  [ 0x73, 1 ],
  'MOV,M,H':  [ 0x74, 1 ], 'MOV,M,L':  [ 0x75, 1 ], 'HLT':      [ 0x76, 1 ], 'MOV,M,A':  [ 0x77, 1 ],
  'MOV,A,B':  [ 0x78, 1 ], 'MOV,A,C':  [ 0x79, 1 ], 'MOV,A,D':  [ 0x7A, 1 ], 'MOV,A,E':  [ 0x7B, 1 ],
  'MOV,A,H':  [ 0x7C, 1 ], 'MOV,A,L':  [ 0x7D, 1 ], 'MOV,A,M':  [ 0x7E, 1 ], 'MOV,A,A':  [ 0x7F, 1 ],
  'ADD,B':    [ 0x80, 1 ], 'ADD,C':    [ 0x81, 1 ], 'ADD,D':    [ 0x82, 1 ], 'ADD,E':    [ 0x83, 1 ],
  'ADD,H':    [ 0x84, 1 ], 'ADD,L':    [ 0x85, 1 ], 'ADD,M':    [ 0x86, 1 ], 'ADD,A':    [ 0x87, 1 ],
  'ADC,B':    [ 0x88, 1 ], 'ADC,C':    [ 0x89, 1 ], 'ADC,D':    [ 0x8A, 1 ], 'ADC,E':    [ 0x8B, 1 ],
  'ADC,H':    [ 0x8C, 1 ], 'ADC,L':    [ 0x8D, 1 ], 'ADC,M':    [ 0x8E, 1 ], 'ADC,A':    [ 0x8F, 1 ],
  'SUB,B':    [ 0x90, 1 ], 'SUB,C':    [ 0x91, 1 ], 'SUB,D':    [ 0x92, 1 ], 'SUB,E':    [ 0x93, 1 ],
  'SUB,H':    [ 0x94, 1 ], 'SUB,L':    [ 0x95, 1 ], 'SUB,M':    [ 0x96, 1 ], 'SUB,A':    [ 0x97, 1 ],
  'SBB,B':    [ 0x98, 1 ], 'SBB,C':    [ 0x99, 1 ], 'SBB,D':    [ 0x9A, 1 ], 'SBB,E':    [ 0x9B, 1 ],
  'SBB,H':    [ 0x9C, 1 ], 'SBB,L':    [ 0x9D, 1 ], 'SBB,M':    [ 0x9E, 1 ], 'SBB,A':    [ 0x9F, 1 ],
  'ANA,B':    [ 0xA0, 1 ], 'ANA,C':    [ 0xA1, 1 ], 'ANA,D':    [ 0xA2, 1 ], 'ANA,E':    [ 0xA3, 1 ],
  'ANA,H':    [ 0xA4, 1 ], 'ANA,L':    [ 0xA5, 1 ], 'ANA,M':    [ 0xA6, 1 ], 'ANA,A':    [ 0xA7, 1 ],
  'XRA,B':    [ 0xA8, 1 ], 'XRA,C':    [ 0xA9, 1 ], 'XRA,D':    [ 0xAA, 1 ], 'XRA,E':    [ 0xAB, 1 ],
  'XRA,H':    [ 0xAC, 1 ], 'XRA,L':    [ 0xAD, 1 ], 'XRA,M':    [ 0xAE, 1 ], 'XRA,A':    [ 0xAF, 1 ],
  'ORA,B':    [ 0xB0, 1 ], 'ORA,C':    [ 0xB1, 1 ], 'ORA,D':    [ 0xB2, 1 ], 'ORA,E':    [ 0xB3, 1 ],
  'ORA,H':    [ 0xB4, 1 ], 'ORA,L':    [ 0xB5, 1 ], 'ORA,M':    [ 0xB6, 1 ], 'ORA,A':    [ 0xB7, 1 ],
  'CMP,B':    [ 0xB8, 1 ], 'CMP,C':    [ 0xB9, 1 ], 'CMP,D':    [ 0xBA, 1 ], 'CMP,E':    [ 0xBB, 1 ],
  'CMP,H':    [ 0xBC, 1 ], 'CMP,L':    [ 0xBD, 1 ], 'CMP,M':    [ 0xBE, 1 ], 'CMP,A':    [ 0xBF, 1 ],
  'RNZ':      [ 0xC0, 1 ], 'POP,B':    [ 0xC1, 1 ], 'JNZ':      [ 0xC2, 3 ], 'JMP':      [ 0xC3, 3 ],
  'CNZ':      [ 0xC4, 3 ], 'PUSH,B':   [ 0xC5, 1 ], 'ADI':      [ 0xC6, 2 ], '':         [ 0xC7, 0 ],
  'RZ':       [ 0xC8, 1 ], 'RET':      [ 0xC9, 1 ], 'JZ':       [ 0xCA, 3 ], '':         [ 0xCB, 0 ],
  'CZ':       [ 0xCC, 3 ], 'CALL':     [ 0xCD, 3 ], 'ACI':      [ 0xCE, 2 ], '':         [ 0xCF, 0 ],
  'RNC':      [ 0xD0, 1 ], 'POP,D':    [ 0xD1, 1 ], 'JNC':      [ 0xD2, 3 ], 'OUT':      [ 0xD3, 2 ],
  'CNC':      [ 0xD4, 3 ], 'PUSH,D':   [ 0xD5, 1 ], 'SUI':      [ 0xD6, 2 ], '':         [ 0xD7, 0 ],
  'RC':       [ 0xD8, 2 ], '':         [ 0xD9, 0 ], 'JC':       [ 0xDA, 3 ], 'IN':       [ 0xDB, 2 ],
  'CC':       [ 0xDC, 3 ], '':         [ 0xDD, 0 ], 'SBI':      [ 0xDE, 2 ], '':         [ 0xDF, 0 ],
  'RPO':      [ 0xE0, 1 ], 'POP,H':    [ 0xE1, 1 ], 'JPO':      [ 0xE2, 3 ], 'XTHL':     [ 0xE3, 1 ],
  'CPO':      [ 0xE4, 3 ], 'PUSH,H':   [ 0xE5, 1 ], 'ANI':      [ 0xE6, 2 ], '':         [ 0xE7, 0 ],
  'RPE':      [ 0xE8, 1 ], 'PCHL':     [ 0xE9, 1 ], 'JPE':      [ 0xEA, 3 ], 'XCHG':     [ 0xEB, 1 ],
  'CPE':      [ 0xEC, 3 ], '':         [ 0xED, 0 ], 'XRI':      [ 0xEE, 2 ], '':         [ 0xEF, 0 ],
  'RP':       [ 0xF0, 1 ], 'POP,PSW':  [ 0xF1, 1 ], 'JP':       [ 0xF2, 3 ], 'DI':       [ 0xF3, 1 ],
  'CP':       [ 0xF4, 3 ], 'PUSH,PSW': [ 0xF5, 1 ], 'ORI':      [ 0xF6, 2 ], '':         [ 0xF7, 0 ],
  'RM':       [ 0xF8, 1 ], 'SPHL':     [ 0xF9, 1 ], 'JM':       [ 0xFA, 3 ], 'EI':       [ 0xFB, 1 ],
  'CM':       [ 0xFC, 3 ], '':         [ 0xFD, 0 ], 'CPI':      [ 0xFE, 2 ], '':         [ 0xFF, 0 ],
};

class Operation {
  constructor(file, line, address, label, length, text) {
    this.file = file;
    this.line = line;
    this.address = address;
    this.label = label;
    this.length = length;
    this.text = text;
  }
}

class Directive extends Operation {
  constructor(file, line, address, label, length, text, bytes) {
    super(file, line, address, label, length, text);
    this.bytes = bytes;
  }

  toHex(symbolTable) {
    if (this.bytes.length) {
      var data = '';
      this.bytes.forEach(function(byte, index) {
        data = data + utils.formatHex(byte, 2, false);
      });

      return util.format(
        ':%s%s%s%s%s\n',
        utils.formatHex(this.length, 2, false), // bytecount
        utils.formatHex(this.address, 4, false), // address
        '00', // record type
        data, // data
        '00' // checksum
      );
    } else {
      return '';
    }
  }

  toString(symbolTable) {
    if (this.bytes.length) {
      var str = util.format(
        '%s, %s, // %s %s',
        utils.formatHex(this.address, 4),
        utils.formatHex(this.bytes.shift()),
        utils.formatLabel(this.label),
        this.text
      );

      str = utils.truncOrPad(str, 55);
      str = str + this.file + ':' + this.line;

      var self = this;
      this.bytes.forEach(function(byte, index) {
        str = str + util.format(
          '\n%s, %s, //',
          utils.formatHex(self.address+index+1, 4),
          utils.formatHex(byte)
        );
      });

      return str;
    } else {
      var str = util.format(
        '              // %s %s',
        utils.formatLabel(this.label),
        this.text
      );
      str = utils.truncOrPad(str, 55);
      str = str + this.file + ':' + this.line;
      return str;
    }
  }
}

class Instruction extends Operation {
  constructor(file, line, address, label, length, text, opcode, operand) {
    super(file, line, address, label, length, text);
    this.opcode = opcode;
    this.operand = operand;
  }

  toHex(symbolTable) {
    var data = utils.formatHex(this.opcode, 2, false);

    for (var i = 0; i < this.length-1; i++) {
      data = data + utils.formatHex(this.operand.toBytes(this.address, symbolTable)[i] || 0, 2, false);
    }

    return util.format(
      ':%s%s%s%s%s\n',
      utils.formatHex(this.length, 2, false), // bytecount
      utils.formatHex(this.address, 4, false), // address
      '00', // record type
      data, // data
      '00' // checksum
    );
  }

  toString(symbolTable) {
    var opstring = util.format(
      '%s, %s, // %s %s',
      utils.formatHex(this.address, 4),
      utils.formatHex(this.opcode),
      utils.formatLabel(this.label),
      this.text
    );

    opstring = utils.truncOrPad(opstring, 55);
    opstring = opstring + this.file + ':' + this.line;

    if (this.length == 2) {
      var bytes = this.operand.toBytes(this.address, symbolTable)
      opstring = opstring + util.format(
        '\n%s, %s, //',
        utils.formatHex(this.address+1, 4),
        utils.formatHex(bytes[0] || 0)
      );
    } else if (this.length == 3) {
      var bytes = this.operand.toBytes(this.address, symbolTable)
      opstring = opstring + util.format(
        '\n%s, %s, //\n%s, %s, //',
        utils.formatHex(this.address+1, 4),
        utils.formatHex(bytes[0] || 0),
        utils.formatHex(this.address+2, 4),
        utils.formatHex(bytes[1] || 0)
      );
    }

    return opstring;
  }
}

exports.opTable = opTable;
exports.Operation = Operation;
exports.Directive = Directive;
exports.Instruction = Instruction;

// vim: ts=2 sw=2 et
