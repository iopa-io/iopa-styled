"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.ButtonCircle = system_components_1.default({
    is: _1.Button,
    px: 3,
    borderRadius: 99999
});
exports.ButtonCircle.displayName = 'ButtonCircle';
exports.default = exports.ButtonCircle;
