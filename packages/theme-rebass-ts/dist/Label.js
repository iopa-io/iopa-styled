"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Label = system_components_1.default({
    is: "label",
    fontSize: 1,
    mb: 1,
    align: "center"
}, {
    display: "flex"
}, 'alignItems', 'space', 'color');
exports.Label.displayName = 'Label';
exports.default = exports.Label;
