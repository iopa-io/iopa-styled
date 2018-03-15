"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.ButtonOutline = system_components_1.default({
    is: _1.Button,
    color: "blue",
    bg: "transparent"
}, props => ({
    boxShadow: "inset 0 0 0 2px",
    "&:hover": {
        color: "white",
        backgroundColor: `${props.theme.colors.blue}`
    },
    "&:focus": {
        boxShadow: "inset 0 0 0 2px, 0 0 0 2px"
    },
    "&:active": {
        color: "white",
        backgroundColor: `${props.theme.colors.blue}`,
        boxShadow: `inset 0 0 0 2px ${props.theme.colors[props.color]}, inset 0 0 8px ${props.theme.colors.darken[1]}`
    }
}));
exports.ButtonOutline.displayName = 'ButtonOutline';
exports.default = exports.ButtonOutline;
