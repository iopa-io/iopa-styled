"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.Container = system_components_1.default({
    is: _1.Box,
    px: 3,
    mx: "auto",
    maxWidth: 1024
}, 'maxWidth');
exports.Container.displayName = 'Container';
exports.default = exports.Container;
