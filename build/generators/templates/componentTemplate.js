"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../../utils");

var _default = function _default(imports, name) {
  return "\n".concat(imports.join("\n"), "\n\nconst ").concat(name, " = (props) => {\n    return (\n        <div className=\"").concat(_utils.files.lcFirst(name), "\">\n\n        </div>\n    );\n};\n\nexport default ").concat(name, ";\n");
};

exports["default"] = _default;