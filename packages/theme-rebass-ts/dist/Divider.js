"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Divider = system_components_1.default({
    is: "hr",
    mx: 0,
    my: 3,
    border: 0,
    borderBottom: 1,
    borderColor: "gray"
}, 'space', 'color');
exports.Divider.displayName = 'Divider';
exports.default = exports.Divider;
