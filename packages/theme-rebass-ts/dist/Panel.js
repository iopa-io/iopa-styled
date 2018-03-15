"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Panel = system_components_1.default({
    is: "div",
    bg: "white",
    borderRadius: 2,
    border: 1,
    borderColor: "gray"
}, {
    overflow: "hidden"
}, 'space');
exports.Panel.displayName = 'Panel';
exports.default = exports.Panel;
