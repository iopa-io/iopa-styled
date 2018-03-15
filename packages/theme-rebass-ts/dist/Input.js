"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Input = system_components_1.default({
    is: "input",
    type: "text",
    fontSize: "inherit",
    lineHeight: "inherit",
    px: 1,
    py: 2,
    m: 0,
    width: 1,
    border: 0,
    borderColor: "gray",
    boxShadow: 1,
    borderRadius: 2,
    color: "inherit",
    bg: "transparent"
}, props => ({
    fontFamily: "inherit",
    display: "inline-block",
    verticalAlign: "middle",
    border: "0",
    appearance: "none",
    "&:focus": {
        outline: "none",
        boxShadow: `inset 0 0 0 1px ${props.theme.colors.blue}`
    },
    "&:disabled": {
        opacity: "0.25"
    }
}));
exports.Input.displayName = 'Input';
exports.default = exports.Input;
