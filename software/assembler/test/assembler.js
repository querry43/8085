const expect = require('chai').expect;
const fs = require('fs');
const tempWrite = require('temp-write');
const tmp = require('tmp');

const Assembler = require('../');
const operands = require('../lib/operands');

describe('assembler', function () {
  this.slow(500);

  it('should ignore comments', function() {
    var asmFile = tempWrite.sync('; test comment\n ; test comment');
    var assembler = new Assembler();
    assembler.readAsmFile(asmFile);
    expect(assembler.instructions()).to.have.lengthOf(0);
  });

  it('should parse labels', function() {
    var asmFile = tempWrite.sync(`
DELAY:  ; a label without an instruction

START:  MOV A,B

LOOP:   MOV B,A
        CALL DELAY
        JMP LOOP
`);

    var assembler = new Assembler();
    assembler.readAsmFile(asmFile);

    expect(assembler.instruction(0)).to.include({ label: 'START' });
    expect(assembler.instruction(1)).to.include({ label: 'LOOP' });
    expect(assembler.instruction(2)).to.include({ label: null });
    expect(assembler.instruction(3)).to.include({ label: null });
  });

  it('should parse numeric immediates', function() {
    var asmFile = tempWrite.sync(`
        MVI A,10B
        MVI A,10Q
        MVI A,10H
        MVI A,10D
        MVI A,10
        MVI A,'A'
        MVI A,'AB'
    `);

    var assembler = new Assembler();
    assembler.readAsmFile(asmFile);

    expect(assembler.instruction(0).operand).to.deep.equal(new operands.Bin(2));
    expect(assembler.instruction(1).operand).to.deep.equal(new operands.Oct(8));
    expect(assembler.instruction(2).operand).to.deep.equal(new operands.Hex(16));
    expect(assembler.instruction(3).operand).to.deep.equal(new operands.Dec(10));
    expect(assembler.instruction(4).operand).to.deep.equal(new operands.Dec(10));
    expect(assembler.instruction(5).operand).to.deep.equal(new operands.Str('A'));
    expect(assembler.instruction(6).operand).to.deep.equal(new operands.Str('AB'));
  });

  it('should parse instructions', function() {
    var asmFile = tempWrite.sync(`
        SIM
        NOP
        MOV A,B
        MOV M,D
        LXI SP,$
    `);

    var assembler = new Assembler();
    assembler.readAsmFile(asmFile);

    expect(assembler.instruction(0)).to.include({ length: 1, text: 'SIM', opcode: 48, operand: undefined });
    expect(assembler.instruction(1)).to.include({ length: 1, text: 'NOP', opcode: 0,  operand: undefined });
    expect(assembler.instruction(2)).to.include({ length: 1, text: 'MOV A , B', opcode: 120, operand: undefined });
    expect(assembler.instruction(3)).to.include({ length: 1, text: 'MOV M , D', opcode: 114, operand: undefined });
    expect(assembler.instruction(4)).to.deep.include({ length: 3, text: 'LXI SP , $', opcode: 49, operand: new operands.LocationCounter() });
  });

  it('should write obj file', function() {
    var asmFile = tempWrite.sync(`
        LXI SP,$
LOOP:   MOV B,A
        JMP LOOP
    `);

    var assembler = new Assembler();
    assembler.readAsmFile(asmFile);

    var tmpobj = tmp.fileSync();
    assembler.writeObjFile(tmpobj.name);

    var data = JSON.parse(fs.readFileSync(tmpobj.name, 'utf8'));
    expect(data).to.be.an('array');

    var linker = new Assembler();
    linker.readObjFile(tmpobj.name);

    expect(linker.instruction(0)).to.include({ length: 3, text: 'LXI SP , $', opcode: 49 });
    expect(linker.instruction(0).operand).to.deep.equal(new operands.LocationCounter());

    expect(linker.instruction(1)).to.include({ length: 1, text: 'MOV B , A', opcode: 71, label: 'LOOP' });

    expect(linker.instruction(2)).to.include({ length: 3, text: 'JMP LOOP', opcode: 195 });
    expect(linker.instruction(2).operand).to.deep.equal(new operands.Label('LOOP'));
  });
});

// vim: ts=2 sw=2
