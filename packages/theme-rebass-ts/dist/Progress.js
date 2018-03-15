"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Progress = system_components_1.default({
    is: "progress",
    width: 1,
    m: 0,
    px: 0,
    color: "blue",
    bg: "gray",
    borderRadius: 2
}, props => ({
    boxSizing: "border-box",
    diplay: "block",
    height: "4px",
    overflow: "hidden",
    appearance: "none",
    "&::-webkit-progress-bar": {
        backgroundColor: `${props.theme.colors.gray}`
    },
    "&::-webkit-progress-value": {
        backgroundColor: "currentcolor"
    },
    "&::-moz-progress-bar": {
        backgroundColor: "currentcolor"
    }
}));
exports.Progress.displayName = 'Progress';
exports.default = exports.Progress;
