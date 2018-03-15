"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Drawer = system_components_1.default({
    is: "div",
    color: "white",
    bg: "dark",
    open: false,
    size: 320,
    position: "left"
}, props => ({
    position: "fixed",
    overflowX: "hidden",
    overflowY: "auto",
    transitionProperty: "transform",
    transitionDuration: ".2s",
    transitionTimingFunction: "ease-out",
    transform: `${props.open ? null : { left: 'translateX(-100%)', right: 'translateX(100%)', top: 'translateY(-100%)', bottom: 'translateY(100%)' }[props.position]}`,
    top: `${/^(top|left|right)$/.test(props.position) ? 0 : null}`,
    bottom: `${/^(bottom|left|right)$/.test(props.position) ? 0 : null}`,
    left: `${/^(left|top|bottom)$/.test(props.position) ? 0 : null}`,
    right: `${/^(right|top|bottom)$/.test(props.position) ? 0 : null}`,
    width: `${/^(left|right)$/.test(props.position) ? props.size + 'px' : null}`,
    height: `${/^(left|right)$/.test(props.position) ? null : props.size + 'px'}`
}), 'size', 'space', 'color');
exports.Drawer.displayName = 'Drawer';
exports.default = exports.Drawer;
