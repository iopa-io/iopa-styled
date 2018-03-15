"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Badge = system_components_1.default({
    is: "div",
    fontSize: 0,
    px: 2,
    py: 1,
    mx: 1,
    color: "white",
    bg: "blue",
    fontWeight: "bold",
    borderRadius: 2
}, {
    WebkitFontSmoothing: "antialiased",
    display: "inline-block",
    verticalAlign: "middle"
});
exports.Badge.displayName = 'Badge';
exports.default = exports.Badge;
