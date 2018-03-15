"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.Measure = system_components_1.default({
    is: _1.Text,
    maxWidth: "32em"
}, 'maxWidth');
exports.Measure.displayName = 'Measure';
exports.default = exports.Measure;
