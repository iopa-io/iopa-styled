"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.BackgroundImage = system_components_1.default({
    is: "div",
    width: 1,
    ratio: 0.75,
    backgroundSize: "cover",
    backgroundPosition: "center"
}, props => ({
    backgroundImage: `url(${props.src})`
}), 'ratio', 'backgroundSize', 'backgroundPosition', 'space', 'color');
exports.BackgroundImage.displayName = 'BackgroundImage';
exports.default = exports.BackgroundImage;
