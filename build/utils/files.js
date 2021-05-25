"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.directory = directory;
exports.file = file;
exports.read = read;
exports.srcPath = exports.ucFirst = exports.lcFirst = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _ = require("..");

var _c = _interopRequireDefault(require("./c"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var lcFirst = function lcFirst(str) {
  return str ? str[0].toLowerCase() + str.slice(1) : str;
};

exports.lcFirst = lcFirst;

var ucFirst = function ucFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : str;
};

exports.ucFirst = ucFirst;

var srcPath = function srcPath() {
  return [process.cwd(), _.args.src || 'src'];
};

exports.srcPath = srcPath;

function directory(dirPath) {
  var currentArray = [];
  dirPath.split('/').forEach(function (element) {
    currentArray.push(element);

    var currentResolvePath = _path["default"].resolve.apply(_path["default"], _toConsumableArray(srcPath()).concat(currentArray));

    if (!_fs["default"].existsSync(currentResolvePath)) {
      _fs["default"].mkdirSync(currentResolvePath);

      console.log(_c["default"].command("Generated directory in path [".concat(_path["default"].resolve.apply(_path["default"], _toConsumableArray(srcPath()).concat(currentArray)), "]")));
    }
  });
}

function file(dirPath, fileName, content) {
  var filePath = _path["default"].resolve.apply(_path["default"], _toConsumableArray(srcPath()).concat(_toConsumableArray(dirPath.split('/')), [fileName]));

  _fs["default"].writeFileSync(filePath, content.trim());

  console.log(_c["default"].command("Generated file in path [".concat(_path["default"].resolve.apply(_path["default"], _toConsumableArray(srcPath()).concat(_toConsumableArray(dirPath.split('/')), [fileName])), "]")));
}

function read(dirPath) {
  return new Promise(function (resolve, reject) {
    _fs["default"].readdir([].concat(_toConsumableArray(srcPath()), _toConsumableArray(dirPath.split('/'))).join('/'), function (err, files) {
      return !err ? resolve(files) : reject(err);
    });
  });
}