'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KEYBOARD_EMPTY_STREAM = exports.DEFAULT_GROUP_BY = exports.RIGHT_ROTOR = exports.CENTER_ROTOR = exports.LEFT_ROTOR = exports.FOURTH_ROTOR = exports.DEFAULT_RE_TYPE_THIN = exports.DEFAULT_RO_TYPE_THIN = exports.DEFAULT_RE_TYPE = exports.DEFAULT_RO_TYPE = exports.DEFAULT_TYPE = exports.RE_TYPE_THIN_C = exports.RE_TYPE_THIN_B = exports.RO_TYPE_THIN_GAMMA = exports.RO_TYPE_THIN_BETA = exports.RE_TYPE_GAMMA = exports.RE_TYPE_BETA = exports.RE_TYPE_C = exports.RE_TYPE_B = exports.RE_TYPE_A = exports.RO_TYPE_VIII = exports.RO_TYPE_VII = exports.RO_TYPE_VI = exports.RO_TYPE_V = exports.RO_TYPE_IV = exports.RO_TYPE_III = exports.RO_TYPE_II = exports.RO_TYPE_I = exports.TYPE_M4 = exports.TYPE_M3 = undefined;

var _EnigmaM = require('enigma-minkiele/dist/EnigmaM4');

var _EnigmaM2 = _interopRequireDefault(_EnigmaM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE_M3 = exports.TYPE_M3 = 'M3'; //Maybe separating constants will solve that circular dependency nightmare with Babel - Webpack

var TYPE_M4 = exports.TYPE_M4 = 'M4';

var RO_TYPE_I = exports.RO_TYPE_I = 'I';
var RO_TYPE_II = exports.RO_TYPE_II = 'II';
var RO_TYPE_III = exports.RO_TYPE_III = 'III';
var RO_TYPE_IV = exports.RO_TYPE_IV = 'IV';
var RO_TYPE_V = exports.RO_TYPE_V = 'V';
var RO_TYPE_VI = exports.RO_TYPE_VI = 'VI';
var RO_TYPE_VII = exports.RO_TYPE_VII = 'VII';
var RO_TYPE_VIII = exports.RO_TYPE_VIII = 'VIII';

var RE_TYPE_A = exports.RE_TYPE_A = 'A';
var RE_TYPE_B = exports.RE_TYPE_B = 'B';
var RE_TYPE_C = exports.RE_TYPE_C = 'C';
var RE_TYPE_BETA = exports.RE_TYPE_BETA = 'BETA';
var RE_TYPE_GAMMA = exports.RE_TYPE_GAMMA = 'GAMMA';

var RO_TYPE_THIN_BETA = exports.RO_TYPE_THIN_BETA = 'THINBETA';
var RO_TYPE_THIN_GAMMA = exports.RO_TYPE_THIN_GAMMA = 'THINGAMMA';

var RE_TYPE_THIN_B = exports.RE_TYPE_THIN_B = 'THINB';
var RE_TYPE_THIN_C = exports.RE_TYPE_THIN_C = 'THINC';

var DEFAULT_TYPE = exports.DEFAULT_TYPE = TYPE_M3;
var DEFAULT_RO_TYPE = exports.DEFAULT_RO_TYPE = RO_TYPE_I;
var DEFAULT_RE_TYPE = exports.DEFAULT_RE_TYPE = RE_TYPE_B;
var DEFAULT_RO_TYPE_THIN = exports.DEFAULT_RO_TYPE_THIN = RO_TYPE_THIN_BETA;
var DEFAULT_RE_TYPE_THIN = exports.DEFAULT_RE_TYPE_THIN = RE_TYPE_THIN_B;

var FOURTH_ROTOR = exports.FOURTH_ROTOR = _EnigmaM2.default.FOURTH_ROTOR;
var LEFT_ROTOR = exports.LEFT_ROTOR = _EnigmaM2.default.LEFT_ROTOR;
var CENTER_ROTOR = exports.CENTER_ROTOR = _EnigmaM2.default.CENTER_ROTOR;
var RIGHT_ROTOR = exports.RIGHT_ROTOR = _EnigmaM2.default.RIGHT_ROTOR;

var DEFAULT_GROUP_BY = exports.DEFAULT_GROUP_BY = 4;
var KEYBOARD_EMPTY_STREAM = exports.KEYBOARD_EMPTY_STREAM = '';