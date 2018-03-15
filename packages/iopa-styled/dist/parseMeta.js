"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(styles, options = {}) {
    let config = styles.components;
    return config.reduce(function (a, b) {
        let { name, description, type, keywords } = b;
        return Object.assign(a, { [b.name]: { name, description, type, keywords } });
    }, {});
}
exports.default = default_1;
;
