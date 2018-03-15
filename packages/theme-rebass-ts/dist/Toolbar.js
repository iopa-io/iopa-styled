"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.Toolbar = system_components_1.default({
    is: _1.Flex,
    px: 2,
    color: "white",
    bg: "dark",
    align: "center",
    minHeight: "48px"
}, {
    WebkitFontSmoothing: "antialiased"
}, 'minHeight');
exports.Toolbar.displayName = 'Toolbar';
exports.default = exports.Toolbar;
