"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var OpenSeadragonControls = function OpenSeadragonControls(props) {
  return _react2["default"].createElement(
    "ul",
    { className: "ocd-toolbar col-md-1" },
    _react2["default"].createElement(
      "li",
      null,
      _react2["default"].createElement(
        "a",
        { id: "zoom-in" },
        _react2["default"].createElement("i", { className: "glyphicon glyphicon-zoom-in" })
      )
    ),
    _react2["default"].createElement(
      "li",
      null,
      _react2["default"].createElement(
        "a",
        { id: "zoom-out" },
        _react2["default"].createElement("i", { className: "glyphicon glyphicon-zoom-out" })
      )
    ),
    _react2["default"].createElement(
      "li",
      null,
      _react2["default"].createElement(
        "a",
        { id: "reset" },
        _react2["default"].createElement("i", { className: "glyphicon glyphicon-home" })
      )
    ),
    _react2["default"].createElement(
      "li",
      null,
      _react2["default"].createElement(
        "a",
        { id: "full-page" },
        _react2["default"].createElement("i", { className: "glyphicon glyphicon-resize-full" })
      )
    ),
    _react2["default"].createElement(
      "li",
      null,
      _react2["default"].createElement(
        "a",
        { id: "next" },
        _react2["default"].createElement("i", { className: "glyphicon glyphicon-arrow-right" })
      )
    ),
    _react2["default"].createElement(
      "li",
      null,
      _react2["default"].createElement(
        "a",
        { id: "previous" },
        _react2["default"].createElement("i", { className: "glyphicon glyphicon-arrow-left" })
      )
    )
  );
};

exports["default"] = OpenSeadragonControls;
module.exports = exports["default"];