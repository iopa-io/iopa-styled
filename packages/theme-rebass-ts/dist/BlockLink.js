"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.BlockLink = system_components_1.default({
    is: "a",
    color: "inherit"
}, {
    display: "block",
    textDecoration: "none"
}, 'space', 'width');
exports.BlockLink.displayName = 'BlockLink';
exports.default = exports.BlockLink;
