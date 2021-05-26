"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(name, list) {
  return "\nexport const ".concat(_lodash["default"].capitalize(name) + _lodash["default"].capitalize(list), "Action = {\n    // types\n    REQUEST: '").concat(name.toUpperCase()).concat(list ? '_' + list.toUpperCase() : '', "_REQUEST',\n    SUCCESS: '").concat(name.toUpperCase()).concat(list ? '_' + list.toUpperCase() : '', "_SUCCESS',\n    FAILURE: '").concat(name.toUpperCase()).concat(list ? '_' + list.toUpperCase() : '', "_FAILURE'\n}\n");
};

exports["default"] = _default;