"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.Circle = system_components_1.default({
    is: _1.Badge,
    size: 24,
    align: "center",
    borderRadius: "99999px"
}, 'textAlign', 'size');
exports.Circle.displayName = 'Circle';
exports.default = exports.Circle;
