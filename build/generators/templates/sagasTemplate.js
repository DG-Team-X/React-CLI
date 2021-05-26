"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(name, l) {
  return "\nimport { put, call, takeLatest } from 'redux-saga/effects';\nimport { api } from '../../utils/api';\n\nfunction* ".concat(_lodash["default"].capitalize(name) + _lodash["default"].capitalize(l), "Saga(params) {\n    const { data, status } = yield call(api, URL, method, params);\n\n    if(status === 200) {\n        yield put(").concat(_lodash["default"].capitalize(name), "Success({data: data}));\n    } else {\n        yield put(").concat(_lodash["default"].capitalize(name), "Failure(null));\n    }\n}\n\nfunction* watch").concat(_lodash["default"].capitalize(name), "Saga() {\n    yield takeLatest(").concat(_lodash["default"].capitalize(name) + _lodash["default"].capitalize(l), "Action.REQUEST, ").concat(_lodash["default"].capitalize(name) + _lodash["default"].capitalize(l), "Saga);\n}\n\nexport {\n    watch").concat(_lodash["default"].capitalize(name), "Saga\n}\n");
};

exports["default"] = _default;