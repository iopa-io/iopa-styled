"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.Message = system_components_1.default({
    is: _1.Flex,
    px: 3,
    py: 2,
    fontWeight: "bold",
    color: "white",
    bg: "blue",
    align: "center",
    minHeight: "48px"
}, {
    WebkitFontSmoothing: "antialiased"
}, 'minHeight');
exports.Message.displayName = 'Message';
exports.default = exports.Message;
