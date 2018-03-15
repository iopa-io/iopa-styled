"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Image = system_components_1.default({
    is: "img"
}, {
    display: "block",
    maxWidth: "100%",
    height: "auto"
}, 'space', 'width', 'color');
exports.Image.displayName = 'Image';
exports.default = exports.Image;
