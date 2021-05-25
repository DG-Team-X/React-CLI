"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(name) {
  return "\nimport { } from '../actions/".concat(name, "';\n\nconst INITIAL_STATE = {\n    list: []\n}\n\nexport default function (state = INITIAL_STATE, action) {\n    switch (action.type) {\n        default:\n            return state;\n    }\n}\n");
};

exports["default"] = _default;