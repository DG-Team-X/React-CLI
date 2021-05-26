#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.command = exports.cli = exports.node = exports.args = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _minimist = _interopRequireDefault(require("minimist"));

var _process = require("process");

var _commands = _interopRequireDefault(require("./commands"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var args = (0, _minimist["default"])(process.argv);
exports.args = args;

var node = args._.shift();

exports.node = node;

var cli = args._.shift();

exports.cli = cli;

var command = args._.shift();

exports.command = command;
console.log(args); // console.log(process.cwd());
// console.log(execPath);
// console.log(__dirname);

if (args.help) {
  var help = [];
  Object.keys(_commands["default"]).forEach(function (cmdKey) {
    var commandClass = _commands["default"][cmdKey];
    var cmd = new commandClass();
    if (cmd.help) cmd.help();
  });
} else {
  if (command) {
    var commandData = command.split(':');
    var action = new _commands["default"][commandData[0]]();
    action.execute(commandData, args);
  } else {
    console.error('undefined command');
  }
}