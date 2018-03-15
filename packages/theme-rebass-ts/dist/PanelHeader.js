"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.PanelHeader = system_components_1.default({
    is: "header",
    fontSize: 2,
    p: 2,
    bg: "white",
    borderBottom: 1,
    borderColor: "gray"
});
exports.PanelHeader.displayName = 'PanelHeader';
exports.default = exports.PanelHeader;
