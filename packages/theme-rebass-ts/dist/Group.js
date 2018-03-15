"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.Group = system_components_1.default({
    is: _1.Flex
}, props => ({
    "& > *": {
        borderRadius: "0"
    },
    "& > *:first-child": {
        borderRadius: `${props.theme.radii[2] + 'px'} 0 0 ${props.theme.radii[2] + 'px'}`
    },
    "& > *:last-child": {
        borderRadius: `0 ${props.theme.radii[2] + 'px'} ${props.theme.radii[2] + 'px'} 0`
    }
}));
exports.Group.displayName = 'Group';
exports.default = exports.Group;
