"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Tooltip = system_components_1.default({
    is: "div",
    color: "white",
    bg: "dark"
}, props => ({
    display: "inline-block",
    position: "relative",
    color: "inherit",
    backgroundColor: "transparent",
    "&::before": {
        display: "none",
        content: `'${props.text}'`,
        position: "absolute",
        bottom: "100%",
        left: "50%",
        transform: "translate(-50%, -4px)",
        whiteSpace: "nowrap",
        fontSize: `${props.theme.fontSizes[0]}pt`,
        paddingTop: "4px",
        paddingBottom: "4px",
        paddingLeft: "8px",
        paddingRight: "8px",
        color: `${props.theme.colors[props.color]}`,
        backgroundColor: `${props.theme.colors[props.bg]}`,
        borderRadius: `${props.theme.radii[1] + 'px'}`
    },
    "&::after": {
        display: "none",
        position: "absolute",
        bottom: "100%",
        left: "50%",
        transform: "translate(-50%, 8px)",
        content: " ",
        borderWidth: "6px",
        borderStyle: "solid",
        borderColor: "transparent",
        borderTopColor: `${props.theme.colors[props.bg]}`
    },
    "&:hover": {
        "&::before, &::after": {
            display: "block"
        }
    }
}));
exports.Tooltip.displayName = 'Tooltip';
exports.default = exports.Tooltip;
