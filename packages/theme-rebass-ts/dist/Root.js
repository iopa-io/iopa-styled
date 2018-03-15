"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Root = system_components_1.default({
    is: "div",
    fontFamily: "sans"
}, {
    "& *": {
        boxSizing: "border-box"
    }
}, 'fontFamily', 'space', 'color');
exports.Root.displayName = 'Root';
exports.default = exports.Root;
