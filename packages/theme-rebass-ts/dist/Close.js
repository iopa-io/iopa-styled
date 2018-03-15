"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.Close = system_components_1.default({
    is: _1.ButtonTransparent,
    p: 0,
    fontSize: 3,
    lineHeight: 1,
    children: "×"
}, {
    width: "24px",
    height: "24px"
});
exports.Close.displayName = 'Close';
exports.default = exports.Close;
