"use strict";

const segments = require('./segments')
const operands = require('./operands');
const operations = require('./operations');
const serialijse = require('serialijse');

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
serialijse.declarePersistable(segments.AbsoluteSegment);
serialijse.declarePersistable(segments.CodeSegment);
serialijse.declarePersistable(segments.DataSegment);

// vim: ts=2 sw=2 et
