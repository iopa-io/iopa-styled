'use strict';

var colors = require('./colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakpoints  = [32, 48, 64, 80].map(function (n) {
  return n + 'em';
});

var space = [0, 4, 8, 16, 32, 64, 128];

var fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96];

var fontWeights = {
  normal: 400,
  bold: 700
};

var radii = exports.radii = [0, 2, 4];

var fonts = exports.fonts = {
  0: 'system-ui, sans-serif',
  sans: 'system-ui, sans-serif',
  mono: '"SF Mono", "Roboto Mono", Menlo, monospace'
};

var shadows = ['none', 'inset 0 0 0 1px ' + colors.gray, 'inset 0 0 0 1px ' + colors.gray + ', 0 0 4px ' + colors.gray];

exports.default = {
  breakpoints: breakpoints,
  space: space,
  fontSizes: fontSizes,
  fontWeights: fontWeights,
  fonts: fonts,
  colors: colors,
  radii: radii,
  shadows: shadows
};