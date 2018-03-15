"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Checkbox = system_components_1.default({
    is: "input",
    type: "checkbox",
    m: 0,
    mr: 2
}, 'space', 'color');
exports.Checkbox.displayName = 'Checkbox';
exports.default = exports.Checkbox;
