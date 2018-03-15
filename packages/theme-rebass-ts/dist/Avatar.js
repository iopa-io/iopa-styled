"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Avatar = system_components_1.default({
    is: "img",
    size: 48,
    borderRadius: "99999px"
}, {
    display: "inline-block"
}, 'space', 'color', 'size');
exports.Avatar.displayName = 'Avatar';
exports.default = exports.Avatar;
