"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Card = system_components_1.default({
    is: "div",
    p: 2,
    bg: "white",
    borderRadius: 2,
    boxShadow: 2
}, {
    overflow: "hidden"
}, 'space', 'color');
exports.Card.displayName = 'Card';
exports.default = exports.Card;
