"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menultems = void 0;

var _dica = _interopRequireDefault(require("../../assets/menu/dica.png"));

var _message = _interopRequireDefault(require("../../assets/menu/message.png"));

var _right = _interopRequireDefault(require("../../assets/menu/right.png"));

var _search = _interopRequireDefault(require("../../assets/menu/search.png"));

var _settings = _interopRequireDefault(require("../../assets/menu/settings.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var menultems = [{
  id: 1,
  title: "Dica",
  image: _dica["default"],
  route: "Tutorial"
}, {
  id: 2,
  title: "Message",
  image: _message["default"],
  route: "Message"
}, {
  id: 3,
  title: "Right",
  image: _right["default"],
  route: "Tutorial"
}, {
  id: 4,
  title: "Search",
  image: _search["default"],
  route: "Tutorial"
}, {
  id: 5,
  title: "Settings",
  image: _settings["default"],
  route: "Settings"
}];
exports.menultems = menultems;