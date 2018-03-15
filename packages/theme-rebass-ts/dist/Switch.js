"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Switch = system_components_1.default({
    is: "div",
    role: "checkbox",
    color: "blue",
    borderRadius: "99999px"
}, props => ({
    display: "inline-flex",
    width: "40px",
    height: "24px",
    backgroundColor: `${props.checked ? props.theme.colors[props.color] : 'transparent'}`,
    boxShadow: "inset 0 0 0 2px",
    transitionProperty: "background-color",
    transitionDuration: ".2s",
    transitionTimingFunction: "ease-out",
    userSelect: "none",
    "&::after": {
        content: "' '",
        width: "16px",
        height: "16px",
        margin: "4px",
        borderRadius: "99999px",
        transitionProperty: "transform, color",
        transitionDuration: ".1s",
        transitionTimingFunction: "ease-out",
        transform: `${(props.checked) ? 'translateX(16px)' : 'translateX(0)'}`,
        backgroundColor: `${props.checked ? props.theme.colors.white : props.theme.colors[props.color]}`
    }
}), 'space', 'color');
exports.Switch.displayName = 'Switch';
exports.default = exports.Switch;
