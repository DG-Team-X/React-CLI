"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ansiColors = _interopRequireDefault(require("ansi-colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_ansiColors["default"].alias('title', _ansiColors["default"].yellow.bold);

_ansiColors["default"].alias('command', _ansiColors["default"].green);

var _default = _ansiColors["default"];
exports["default"] = _default;