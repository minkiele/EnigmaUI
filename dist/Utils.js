"use strict";function toInt(t){return parseInt("0"+t)}function getTimestampKey(){new Date;return"w"+Math.random().toString()}function rudimentaryTranslator(t,e){return"string"==typeof e[t]?e[t]:t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.toInt=toInt,exports.getTimestampKey=getTimestampKey,exports.rudimentaryTranslator=rudimentaryTranslator;