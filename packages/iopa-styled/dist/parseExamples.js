"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createExample_1 = require("./createExample");
function default_1(styles, library, options = {}) {
    let config = styles.components;
    return config.reduce(function (a, b) {
        return Object.assign(a, { [b.name]: createExample_1.default(b, library) });
    }, {});
}
exports.default = default_1;
;
