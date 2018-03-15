"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Dot = system_components_1.default({
    is: "button",
    m: 0,
    p: 0,
    size: 16,
    bg: "darken.1",
    borderRadius: 99999,
    border: 4,
    borderColor: "transparent",
    focus: {
        backgroundColor: "blue"
    },
    hover: {
        backgroundColor: "blue"
    },
    disabledStyle: {
        opacity: 0.25
    }
}, {
    appearance: "none",
    backgroundClip: "padding-box"
}, 'size', 'space', 'color');
exports.Dot.displayName = 'Dot';
exports.default = exports.Dot;
