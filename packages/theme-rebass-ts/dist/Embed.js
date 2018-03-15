"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Embed = system_components_1.default({
    is: "div",
    ratio: 0.5625
}, {
    position: "relative",
    overflow: "hidden",
    "& > iframe": {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        bottom: "0",
        left: "0",
        border: "0"
    }
}, 'ratio', 'space', 'color');
exports.Embed.displayName = 'Embed';
exports.default = exports.Embed;
