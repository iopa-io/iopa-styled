"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Textarea = system_components_1.default({
    is: "textarea",
    px: 1,
    py: 2,
    m: 0,
    width: 1,
    fontSize: "inherit",
    color: "inherit",
    bg: "transparent",
    border: 0,
    borderColor: "gray",
    boxShadow: 1,
    borderRadius: 2
}, props => ({
    fontFamily: "inherit",
    appearance: "none",
    "&:focus": {
        outline: "none",
        boxShadow: `${'inset 0 0 0 1px' + props.theme.colors.blue}`
    },
    "&:disabled": {
        opacity: "0.25"
    }
}));
exports.Textarea.displayName = 'Textarea';
exports.default = exports.Textarea;
