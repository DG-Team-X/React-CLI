"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../utils");

var _componentTemplate = _interopRequireDefault(require("./templates/componentTemplate"));

var _exportsTemplate = _interopRequireDefault(require("./templates/exportsTemplate"));

var _stylesTemplate = _interopRequireDefault(require("./templates/stylesTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BaseComponentGenerator = /*#__PURE__*/function () {
  function BaseComponentGenerator(args) {
    _classCallCheck(this, BaseComponentGenerator);

    var name = args._.shift();

    if (name) {
      this.args = args;
      this.name = _utils.files.ucFirst(name);
      this.dir = "baseComponents/".concat(this.name);
    } else {
      // this.help()
      throw new Error("component name required");
    }
  }

  _createClass(BaseComponentGenerator, [{
    key: "generate",
    value: function generate() {
      this.generateDirectory();
      this.generateComponent();
      this.generateStyles();
      this.generateExports();
    }
  }, {
    key: "generateDirectory",
    value: function generateDirectory() {
      _utils.files.directory(this.dir);
    }
  }, {
    key: "generateComponent",
    value: function generateComponent() {
      var imports = ["import React from 'react'", "import './".concat(this.name, ".scss'")];
      var componentCode = (0, _componentTemplate["default"])(imports, this.name);

      _utils.files.file(this.dir, "".concat(this.name, ".jsx"), componentCode);
    }
  }, {
    key: "generateStyles",
    value: function generateStyles() {
      var stylesCode = (0, _stylesTemplate["default"])(this.name);

      _utils.files.file(this.dir, "".concat(_utils.files.lcFirst(this.name), ".scss"), stylesCode);
    }
  }, {
    key: "generateExports",
    value: function generateExports() {
      _utils.files.read('baseComponents').then(function (list) {
        var components = list.filter(function (fname) {
          return fname != "index.js";
        });
        var exportsCode = (0, _exportsTemplate["default"])(components);

        _utils.files.file('baseComponents', 'index.js', exportsCode);
      });
    }
  }]);

  return BaseComponentGenerator;
}();

exports["default"] = BaseComponentGenerator;

_defineProperty(BaseComponentGenerator, "alias", 'bc');

_defineProperty(BaseComponentGenerator, "description", 'Make a base component');