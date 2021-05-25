"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.space = exports.command = exports.renderItem = exports.render = void 0;

var _c = _interopRequireDefault(require("./c"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var render = function render(item) {
  renderItem(item, 0);
};

exports.render = render;

var renderItem = function renderItem(item, lvl) {
  if (item.title) {
    console.log(space(lvl) + _c["default"].title(item.title));
  }

  if (item.text) {
    console.log(space(lvl) + (item === null || item === void 0 ? void 0 : item.text));
  }

  if (item.items) {
    item.items.forEach(function (item) {
      return renderItem(item, lvl + 1);
    });
  }
};

exports.renderItem = renderItem;

var command = function command(_command, description) {
  return {
    text: "".concat(_c["default"].green(_command).padEnd(28, ' '), " ").concat(description)
  };
};

exports.command = command;

var space = function space(n) {
  var result = '';

  for (var i = 0; i < n; i++) {
    result += '  ';
  }

  return result;
};

exports.space = space;