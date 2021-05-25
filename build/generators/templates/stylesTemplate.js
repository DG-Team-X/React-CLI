"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../../utils");

var _default = function _default(name) {
  return "\n@import '../../styles/variables.scss';\n\n.".concat(_utils.files.lcFirst(name), " {}\n");
};

exports["default"] = _default;