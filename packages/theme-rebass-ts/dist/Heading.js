"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Heading = system_components_1.default({
    is: "h2",
    fontSize: 5,
    fontWeight: "bold",
    lineHeight: 1.25,
    m: 0
}, 'color', 'textAlign');
exports.Heading.displayName = 'Heading';
exports.default = exports.Heading;
