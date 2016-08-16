"use strict";

class Operand {
  constructor(value) { this.value = value; }
  toString() { return this.value; }
  toInt(programCounter, symbolTable) { return this.value; }

  // bytes[0] = LSB
  toBytes(programCounter, symbolTable) {
    var bytes = [ ];
    var value = this.value;

    while (value > 0) {
      bytes.push((value & 0xff).toString(16));
      value = value >> 8;
    }

    return bytes;
  }
}

class Hex extends Operand {
  constructor(value) { super(parseInt(value.slice(0, -1), 16)); }
  toString() { return '0x' + this.value.toString(16); }
}

class Oct extends Operand {
  constructor(value) { super(parseInt(value.slice(0, -1), 8)); }
  toString() { return '0' + this.value.toString(8); }
}

class Bin extends Operand {
  constructor(value) { super(parseInt(value.slice(0, -1), 2)); }
  toString() { return '0b' + this.value.toString(2); }
}

class Dec extends Operand {
  constructor(value) {
    if (value.slice(-1) == 'D') {
      super(parseInt(value.slice(0, -1)));
    } else {
      super(parseInt(value));
    }
  }
}

class Str extends Operand {
  constructor(value) { super(value.slice(1, -1)); }

  toInt(programCounter, symbolTable) { return this.value.charCodeAt(1); }

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
    if (!addy) {
      console.error('unable to find address ' + this.value);
      process.exit(1);
    }
    return addy;
  }

  // bytes[0] = LSB
  toBytes(programCounter, symbolTable) {
    return this.toInt(programCounter, symbolTable).toString(16).match(/.{1,2}/g).reverse();
  }
}

class LocationCounter extends Operand {
  constructor() { super('$'); }

  toInt(programCounter, symbolTable) {
    return programCounter;
  }

  // bytes[0] = LSB
  toBytes(programCounter, symbolTable) {
    return this.toInt(programCounter, symbolTable).toString(16).match(/.{1,2}/g).reverse();
  }
}

class Expression extends Operand {
  constructor(left, right, text) {
    super(text);
    this.left = left;
    this.right = right;
  }

  toBytes(programCounter, symbolTable) {
    return this.toInt(programCounter, symbolTable).toString(16).match(/.{1,2}/g).reverse();
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

exports.Operand = Operand;
exports.Expression = Expression;

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
