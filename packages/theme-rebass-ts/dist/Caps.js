"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.Caps = system_components_1.default({
    is: _1.Text,
    fontSize: 0,
    letterSpacing: "0.2em"
}, {
    textTransform: "uppercase"
}, 'letterSpacing');
exports.Caps.displayName = 'Caps';
exports.default = exports.Caps;
