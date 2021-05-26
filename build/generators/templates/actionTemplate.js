"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(name, testing) {
  return "\n\nconst ".concat(_lodash["default"].capitalize(name) + _lodash["default"].capitalize(testing), "Request = () => ({\n    type: \n})\n\nexport {\n\n}\n");
};

exports["default"] = _default;