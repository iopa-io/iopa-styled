"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Slider = system_components_1.default({
    is: "input",
    type: "range",
    width: 1,
    mx: 0,
    my: 2,
    color: "inherit",
    bg: "gray",
    borderRadius: 99999
}, {
    display: "block",
    height: "4px",
    cursor: "pointer",
    appearance: "none",
    "&::-webkit-slider-thumb": {
        width: "16px",
        height: "16px",
        backgroundColor: "currentcolor",
        border: "0",
        borderRadius: "99999px",
        appearance: "none"
    }
});
exports.Slider.displayName = 'Slider';
exports.default = exports.Slider;
