"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(name) {
  return "\nimport { } from '../actions/".concat(name, "';\n\nconst inisitalState = {\n    // params\n}\n\nexport default function (state = inisitalState, action) {\n    switch (action.type) {\n        default:\n            return state;\n    }\n}\n");
};

exports["default"] = _default;