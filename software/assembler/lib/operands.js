"use strict";

class Operand {
  constructor(value) { this.value = value; }
  toString() { return this.value; }
  toInt(programCounter, symbolTable) { return this.value; }

  // bytes[0] = LSB
  toBytes(programCounter, symbolTable) {
    var bytes = [ ];
    var value = this.toInt(programCounter, symbolTable);

    do {
      bytes.push((value & 0xff).toString(16));
      value = value >> 8;
    } while (value > 0)

    return bytes;
  }
}

class Hex extends Operand {
  static parse(value) { return new Hex(parseInt(value.slice(0, -1), 16)); }
  toString() { return '0x' + this.value.toString(16); }
}

class Oct extends Operand {
  static parse(value) { return new Oct(parseInt(value.slice(0, -1), 8)); }
  toString() { return '0' + this.value.toString(8); }
}

class Bin extends Operand {
  static parse(value) { return new Bin(parseInt(value.slice(0, -1), 2)); }
  toString() { return '0b' + this.value.toString(2); }
}

class Dec extends Operand {
  static parse(value) {
    if (value.slice(-1) == 'D') {
      return new Dec(parseInt(value.slice(0, -1)));
    } else {
      return new Dec(parseInt(value));
    }
  }
}

class Str extends Operand {
  static parse(value) { return new Str(value.slice(1, -1)); }

  toInt(programCounter, symbolTable) { return this.value.charCodeAt(0); }

  // bytes[0] = first character
  toBytes(programCounter, symbolTable) {
    var bytes = [ ];

    for (var i = 0; i < this.value.length; i++) {
      bytes.push(this.value.charCodeAt(i, 16));
    }

    return bytes;
  }
}

class Label extends Operand {
  toInt(programCounter, symbolTable) {
    var addy = symbolTable[this.value];
    if (addy == null) {
      console.error('unable to find address ' + this.value);
      process.exit(1);
    }
    return addy;
  }
}

class LocationCounter extends Operand {
  constructor() { super('$'); }

  toInt(programCounter, symbolTable) {
    return programCounter;
  }
}

class Expression extends Operand {
  constructor(left, right, text) {
    super(text);
    this.left = left;
    this.right = right;
  }
}


class Add extends Expression {
  toInt(programCounter, symbolTable) {
    return this.left.toInt(programCounter, symbolTable) + this.right.toInt(programCounter, symbolTable);
  }
}

class Sub extends Expression {
  toInt(programCounter, symbolTable) {
    return this.left.toInt(programCounter, symbolTable) - this.right.toInt(programCounter, symbolTable);
  }
}

class Mult extends Expression {
  toInt(programCounter, symbolTable) {
    return this.left.toInt(programCounter, symbolTable) * this.right.toInt(programCounter, symbolTable);
  }
}

class Div extends Expression {
  toInt(programCounter, symbolTable) {
    return parseInt(this.left.toInt(programCounter, symbolTable) / this.right.toInt(programCounter, symbolTable));
  }
}

class Mod extends Expression {
  toInt(programCounter, symbolTable) {
    return this.left.toInt(programCounter, symbolTable) % this.right.toInt(programCounter, symbolTable);
  }
}

exports.Add = Add;
exports.Bin = Bin;
exports.Dec = Dec;
exports.Div = Div;
exports.Hex = Hex;
exports.Label = Label;
exports.LocationCounter = LocationCounter;
exports.Mod = Mod;
exports.Mult = Mult;
exports.Oct = Oct;
exports.Str = Str;
exports.Sub = Sub;

// vim: ts=2 sw=2 et
