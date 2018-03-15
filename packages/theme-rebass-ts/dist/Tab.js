"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Tab = system_components_1.default({
    is: "a",
    fontSize: 1,
    fontWeight: "bold",
    mr: 3,
    py: 2,
    color: "inherit",
    borderBottom: 2,
    borderColor: "transparent",
    hover: {
        color: "blue"
    }
}, {
    textDecoration: "none"
});
exports.Tab.displayName = 'Tab';
exports.default = exports.Tab;
