"use strict";

class AddressSegment {
  constructor() { this.address = 0; }
  increment(n) { this.address = this.address + n }

  clone() {
    var obj = Object.create(this);
    for (var attr in this) {
      obj[attr] = this[attr];
    }
    return obj;
  }
}

class AbsoluteSegment extends AddressSegment { }
class CodeSegment extends AddressSegment { }
class DataSegment extends AddressSegment { }

exports.AbsoluteSegment = AbsoluteSegment;
exports.CodeSegment = CodeSegment;
exports.DataSegment = DataSegment;

// vim: ts=2 sw=2 et
