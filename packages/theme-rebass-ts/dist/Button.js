"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Button = system_components_1.default({
    is: "button",
    fontSize: 1,
    fontWeight: "bold",
    lineHeight: 1.1428571428571428,
    m: 0,
    px: 3,
    py: 2,
    color: "white",
    bg: "blue",
    borderRadius: 2,
    border: 0
}, props => ({
    fontFamily: "inherit",
    WebkitFontSmoothing: "antialiased",
    display: "inline-block",
    verticalAlign: "middle",
    textAlign: "center",
    textDecoration: "none",
    appearance: "none",
    "&:hover": {
        boxShadow: `inset 0 0 0 999px ${props.theme.colors.darken[0]}`
    },
    "&:focus": {
        outline: "0",
        boxShadow: `0 0 0 2px ${props.theme.colors.blue}`
    },
    "&:active": {
        backgroundColor: `${props.theme.colors.blue[6]}`,
        boxShadow: `inset 0 0 8px ${props.theme.colors.darken[1]}`
    },
    "&:disabled": {
        opacity: "0.25"
    }
}));
exports.Button.displayName = 'Button';
exports.default = exports.Button;
