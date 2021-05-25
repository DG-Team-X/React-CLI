"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ComponenGenerator = _interopRequireDefault(require("./ComponenGenerator"));

var _PageGenerator = _interopRequireDefault(require("./PageGenerator"));

var _StoreGenerator = _interopRequireDefault(require("./StoreGenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  page: _PageGenerator["default"],
  component: _ComponenGenerator["default"],
  store: _StoreGenerator["default"]
};
exports["default"] = _default;