"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(components) {
  return "\n".concat(components.map(function (component) {
    return "export {default as ".concat(component, "} from './").concat(component, "/").concat(component, "'");
  }).join("\n"), "\n");
};

exports["default"] = _default;