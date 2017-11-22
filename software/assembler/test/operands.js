const expect = require('chai').expect;

const operands = require('../lib/operands');

describe('operands', function () {
  describe('parsing', function() {
    it('should parse hex', function() {
      expect(operands.Hex.parse('0H')).to.deep.equal(new operands.Hex(0));
      expect(operands.Hex.parse('FFH')).to.deep.equal(new operands.Hex(255));
      expect(operands.Hex.parse('ABCDH')).to.deep.equal(new operands.Hex(43981));
    });

    it('should parse oct', function() {
      expect(operands.Oct.parse('0Q')).to.deep.equal(new operands.Oct(0));
      expect(operands.Oct.parse('77Q')).to.deep.equal(new operands.Oct(63));
      expect(operands.Oct.parse('1234Q')).to.deep.equal(new operands.Oct(668));
    });

    it('should parse bin', function() {
      expect(operands.Bin.parse('0B')).to.deep.equal(new operands.Bin(0));
      expect(operands.Bin.parse('11B')).to.deep.equal(new operands.Bin(3));
      expect(operands.Bin.parse('10101010B')).to.deep.equal(new operands.Bin(170));
    });

    it('should parse dec', function() {
      expect(operands.Dec.parse('0D')).to.deep.equal(new operands.Dec(0));
      expect(operands.Dec.parse('0')).to.deep.equal(new operands.Dec(0));
      expect(operands.Dec.parse('10D')).to.deep.equal(new operands.Dec(10));
      expect(operands.Dec.parse('10')).to.deep.equal(new operands.Dec(10));
    });

    it('should parse str', function() {
      expect(operands.Str.parse("''")).to.deep.equal(new operands.Str(''));
      expect(operands.Str.parse("'hello'")).to.deep.equal(new operands.Str('hello'));
    });
  });

  describe('conversion', function() {
    it('should convert strings to ints', function() {
      expect(operands.Str.parse("'A'").toInt(null, null)).to.equal(65);
      expect(operands.Str.parse("'AB'").toInt(null, null)).to.equal(65);
    });

    it('should convert strings to bytes', function() {
      expect(operands.Str.parse("'A'").toBytes(null, null)).to.deep.equal([65]);
      expect(operands.Str.parse("'AB'").toBytes(null, null)).to.deep.equal([65, 66]);
    });

    it('should convert label to address', function() {
      expect((new operands.Label('FOO')).toInt(null, {FOO: 1, BAR: 2})).to.equal(1);
    });

    it('should convert location counter to address', function() {
      expect((new operands.LocationCounter()).toInt(5, null)).to.equal(5);
    });
  });

  describe('expressions', function() {
    it('should add expressions', function() {
      expect((new operands.Add(new operands.Dec(10), new operands.Dec(5), null)).toInt(null, null)).to.equal(15);
    });

    it('should sub expressions', function() {
      expect((new operands.Sub(new operands.Dec(10), new operands.Dec(5), null)).toInt(null, null)).to.equal(5);
    });

    it('should mult expressions', function() {
      expect((new operands.Mult(new operands.Dec(10), new operands.Dec(5), null)).toInt(null, null)).to.equal(50);
    });

    it('should div expressions', function() {
      expect((new operands.Div(new operands.Dec(10), new operands.Dec(5), null)).toInt(null, null)).to.equal(2);
    });

    it('should mod expressions', function() {
      expect((new operands.Mod(new operands.Dec(10), new operands.Dec(5), null)).toInt(null, null)).to.equal(0);
    });
  });
});

// vim: ts=2 sw=2
