"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.Carousel = system_components_1.default({
    is: _1.Flex,
    width: 1
}, props => ({
    overflow: "hidden",
    whiteSpace: "nowrap",
    "& > div": {
        flex: "none",
        width: "100%"
    },
    "& > div:first-child": {
        marginLeft: `${(props.index * -100)}%`,
        transitionProperty: "margin",
        transitionDuration: ".2s",
        transitionTimingFunction: "ease-out"
    }
}), 'space', 'color');
exports.Carousel.displayName = 'Carousel';
exports.default = exports.Carousel;
