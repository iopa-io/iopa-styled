"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.Truncate = system_components_1.default({
    is: _1.Text
}, {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
});
exports.Truncate.displayName = 'Truncate';
exports.default = exports.Truncate;
