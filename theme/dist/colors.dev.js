"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.COMPONENTS = exports.THEME = exports.SOCIAL = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SOCIAL = {
  FACEBOOK: '#3B5998',
  TWITTER: '#5BC0DE',
  DRIBBBLE: '#EA4C89'
};
exports.SOCIAL = SOCIAL;
var THEME = {
  THEME: '#FE2472',
  PRIMARY: "#424495",
  // AZUL "#2A265F", //rosa'#FE2472', //(verdeagua#368c8c)
  DARK_PRIMARY: '#F4075C',
  LIGHT_PRIMARY: '#FF8AB9',
  BRIGHT_PRIMARY: '#FFD1E4',
  INFO: '#0E2ADD',
  DARK_INFO: '#0520D0',
  LIGHT_INFO: '#8794FF',
  BRIGHT_INFO: '#D1D6FF',
  DANGER: '#FF3F31',
  DARK_DANGER: '#F43324',
  LIGHT_DANGER: '#FF7167',
  BRIGHT_DANGER: '#FFCAC6',
  WARNING: '#FF9C09',
  DARK_WARNING: '#EE8E00',
  LIGHT_WARNING: '#FFCC76',
  BRIGHT_WARNING: '#FFEBCB',
  SUCCESS: '#18CE0F',
  DARK_SUCCESS: '#24AD12',
  LIGHT_SUCCESS: '#88F38E',
  BRIGHT_SUCCESS: '#D2FBD3',
  WHITE: '#FFFFFF',
  DARK_BLACK: '#000B19',
  BLACK: '#161D28',
  BRIGHT_BLACK: '#3D4144',
  LIGHT_BLACK: '#2A2F36',
  DARK_SECONDARY: '#62676B',
  SECONDARY: '#9FA5AA',
  BRIGHT_SECONDARY: '#EEF1F3',
  LIGHT_SECONDARY: '#D6DADD',
  DARK_GREY: '#E0E4EA',
  GREY: '#E9EBEF',
  BRIGHT_GREY: '#F7F8F9',
  LIGHT_GREY: '#F0F1F4',
  NEUTRAL: 'rgba(255,255,255, 0.65)'
}; // export const SHADOWS = {
//   PRIMARY: 0 13px 11px -8 rgba(254, 36, 114, .30),
//   INFO: 0 13px 11px -8 rgba(14, 42, 221, .30),
//   SUCCESS: 0 13px 11px -8 rgba(24, 206, 15, .30),
//   WARNING: 0 13px 11px -8 rgba(255, 156, 9, .30),
//   DANGER: 0 13px 11px -8 rgba(255, 63, 49, .30),
//   BLACK: 0 13px 11px -8 rgba(0, 0, 0, .30),
//   WHITE: 0 10px 20px -8 rgba(210, 210, 210, .100),
//   GREY: 0 13px 11px -8 rgba(152, 152, 152, .30),
//   LIGHT_GREY: 0 13px 11px -8 rgba(149, 149, 149, .30),
// };

exports.THEME = THEME;
var COMPONENTS = {
  INPUT: '#808080',
  PLACEHOLDER: '#9FA5AA',
  NAVBAR: '#F9F9F9',
  BLOCK: '#808080',
  ICON: '#000000'
};
exports.COMPONENTS = COMPONENTS;

var COLORS = _objectSpread({
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GREY: '#898989',
  MUTED: '#9FA5AA',
  TRANSPARENT: 'transparent',
  NEUTRAL: 'rgba(255,255,255, 0.65)'
}, COMPONENTS, {}, THEME, {}, SOCIAL);

var _default = COLORS;
exports["default"] = _default;