"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.Column = system_components_1.default({
    is: _1.Box,
    px: 3,
    mb: 4,
    flex: "1 1 auto"
});
exports.Column.displayName = 'Column';
exports.default = exports.Column;
