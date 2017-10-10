"use strict";

const util = require('util');

function truncOrPad(str, len) {
  if (str.length > len) {
    return str.substr(0,len-6)+'... '
  } else {
    return str + Array(len - str.length - 1).join(' ');
  }
}

function formatLabel(l) {
  var width = 8;
  if (l) {
    return l + ':' + Array(width - l.length - 1).join(' ');
  } else {
    return Array(width).join(' ');
  }
}

function formatHex(d, length=2, prefix=true) {
  var hex = d.toString(16);
  if (hex.length < length) {
    hex = Array(length - hex.length + 1).join('0') + hex;
  }
  return prefix ? '0x' + hex : hex;
}

exports.truncOrPad = truncOrPad;
exports.formatLabel = formatLabel;
exports.formatHex = formatHex;

// vim: ts=2 sw=2 et
