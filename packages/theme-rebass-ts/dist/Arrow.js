"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Arrow = system_components_1.default({
    is: "div",
    direction: "down",
    k: 5
}, props => ({
    display: "inline-block",
    width: "0",
    height: "0",
    verticalAlign: "middle",
    borderRight: ".3125em solid transparent",
    borderLeft: ".3125em solid transparent",
    borderTop: `${props.direction === 'down' ? '.4375em solid' : null}`,
    borderBottom: `${props.direction === 'up' ? '.4375em solid' : null}`
}), 'space', 'color');
exports.Arrow.displayName = 'Arrow';
exports.default = exports.Arrow;
