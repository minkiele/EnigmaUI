'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toInt = toInt;
exports.getTimestampKey = getTimestampKey;
exports.rudimentaryTranslator = rudimentaryTranslator;
function toInt(val) {
  return parseInt('0' + val);
}

function getTimestampKey() {
  var now = new Date();
  return 'w' + Math.random().toString();
}

function rudimentaryTranslator(key, obj) {
  if (typeof obj[key] === 'string') {
    return obj[key];
  } else {
    return key;
  }
}