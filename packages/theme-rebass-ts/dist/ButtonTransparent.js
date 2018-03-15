"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.ButtonTransparent = system_components_1.default({
    is: _1.Button,
    color: "inherit",
    bg: "transparent"
}, props => ({
    "&:hover": {
        color: `${props.theme.colors[props.color]}`,
        backgroundColor: "transparent"
    },
    "&:focus": {
        boxShadow: "inset 0 0 0 2px, 0 0 0 2px"
    },
    "&:active": {
        backgroundColor: "transparent",
        boxShadow: `inset 0 0 0 2px, inset 0 0 8px ${props.theme.colors.darken[1]}`
    }
}));
exports.ButtonTransparent.displayName = 'ButtonTransparent';
exports.default = exports.ButtonTransparent;
