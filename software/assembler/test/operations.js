const expect = require('chai').expect;

const operations = require('../lib/operations');

describe('operations', function () {
  describe('instructions', function () {
    it('should convert to hex', function () {
      var inst = (new operations.Instruction(null, null, 16, null, 1, null, 10, null)).toHex(null);
      console.log(inst);
    });
  });
});

// SPACE:  DS 10
//         LXI H, SPACE ; next instruction is +10
// 
//         DB 1
//         DB F00FABH ; FO,OF,AB
//         DB 'hello' ; h e l l o
//         DB 1,2,3,4
//         DB 10D,F00FH ; 0A,FO,OF
// 
//         FOO SET 10
//         MVI A,FOO

// vim: ts=2 sw=2
