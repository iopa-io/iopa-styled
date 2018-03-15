"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.Tabs = system_components_1.default({
    is: _1.Flex,
    borderBottom: 1,
    borderColor: "gray"
});
exports.Tabs.displayName = 'Tabs';
exports.default = exports.Tabs;
