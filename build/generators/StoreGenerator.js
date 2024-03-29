"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../utils");

var _actionTemplate = _interopRequireDefault(require("./templates/actionTemplate"));

var _reducerTemplate = _interopRequireDefault(require("./templates/reducerTemplate"));

var _sagasTemplate = _interopRequireDefault(require("./templates/sagasTemplate"));

var _constantsTemplate = _interopRequireDefault(require("./templates/constantsTemplate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dirs = {
  actions: 'store/actions',
  reducers: 'store/reducers',
  sagas: 'store/sagas',
  constants: 'store/constants'
};

var StoreGenerator = /*#__PURE__*/function () {
  function StoreGenerator(args) {
    _classCallCheck(this, StoreGenerator);

    var name = args._.shift();

    if (name) {
      this.args = args;
      this.name = _utils.files.lcFirst(name);
      this.dir = "store/".concat(this.name);
      console.log(this.args);
    } else {
      throw new Error("component name required");
    }
  }

  _createClass(StoreGenerator, [{
    key: "generate",
    value: function generate() {
      this.generateDirectory();
      this.generateAction();
      this.generateReducer();
      this.generateSaga();
      this.generateConstants();
    }
  }, {
    key: "generateDirectory",
    value: function generateDirectory() {
      _utils.files.directory('store/actions');

      _utils.files.directory('store/reducers');

      _utils.files.directory('store/sagas');

      _utils.files.directory('store/constants');
    }
  }, {
    key: "generateAction",
    value: function generateAction() {
      _utils.files.file(dirs.actions, "".concat(this.name, ".js"), (0, _actionTemplate["default"])(this.name, this.args.list));
    }
  }, {
    key: "generateReducer",
    value: function generateReducer() {
      _utils.files.file(dirs.reducers, "".concat(this.name, ".js"), (0, _reducerTemplate["default"])(this.name, this.args.list));
    }
  }, {
    key: "generateSaga",
    value: function generateSaga() {
      _utils.files.file(dirs.sagas, "".concat(this.name, ".js"), (0, _sagasTemplate["default"])(this.name, this.args.list));
    }
  }, {
    key: "generateConstants",
    value: function generateConstants() {
      _utils.files.file(dirs.constants, "".concat(this.name, ".js"), (0, _constantsTemplate["default"])(this.name, this.args.list ? this.args.list : ''));
    }
  }]);

  return StoreGenerator;
}();

exports["default"] = StoreGenerator;

_defineProperty(StoreGenerator, "alias", 's');

_defineProperty(StoreGenerator, "description", 'Make a store');