"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Border = system_components_1.default({
    is: "div",
    border: 1,
    borderColor: "gray"
}, 'space', 'width', 'color');
exports.Border.displayName = 'Border';
exports.default = exports.Border;
