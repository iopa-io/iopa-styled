"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createComponent_1 = require("./createComponent");
var sortImportsPredicate = function sortImports(a, b) {
    if (a.imports.includes(b.name) && b.imports.includes(a.name))
        return 1;
    if (a.imports.includes(b.name))
        return 1;
    if (b.imports.includes(a.name))
        return -1;
    return 0;
};
function default_1(styles, options = {}) {
    let config = styles.components;
    var base = config.filter(function (c) {
        return c.type && !/^[A-Z]/.test(c.type);
    });
    var extensions = config.filter(function (c) {
        return c.type && /^[A-Z]/.test(c.type);
    });
    var macros = config.filter(function (c) {
        return !c.type && c.imports;
    }).sort(sortImportsPredicate);
    return [].concat(base, extensions, macros).reduce(function (a, b) {
        return Object.assign(a, { [b.name]: createComponent_1.default(b, a) });
    }, options.external || {});
}
exports.default = default_1;
;
