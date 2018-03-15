"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.PanelFooter = system_components_1.default({
    is: "footer",
    fontSize: 1,
    p: 2,
    bg: "white",
    borderTop: 1,
    borderColor: "gray"
});
exports.PanelFooter.displayName = 'PanelFooter';
exports.default = exports.PanelFooter;
