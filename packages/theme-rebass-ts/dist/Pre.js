"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Pre = system_components_1.default({
    is: "pre",
    fontSize: 1,
    fontFamily: "mono",
    m: 0
}, {
    overflow: "auto"
}, 'fontFamily', 'space', 'color');
exports.Pre.displayName = 'Pre';
exports.default = exports.Pre;
