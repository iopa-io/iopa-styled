"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.Modal = system_components_1.default({
    is: _1.Position,
    top: "50%",
    left: "50%",
    p: 3,
    bg: "white",
    borderRadius: 2,
    maxWidth: "100vw",
    maxHeight: "100vh"
}, props => ({
    boxShadow: `0 0 0 60vmax ${props.theme.colors.darken[2]}, 0 0 32px ${props.theme.colors.darken[1]}`,
    overflow: "auto",
    transform: "translate(-50%, -50%)"
}), 'width', 'maxWidth', 'maxHeight');
exports.Modal.displayName = 'Modal';
exports.default = exports.Modal;
