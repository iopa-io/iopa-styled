"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
const _1 = require("./");
exports.Banner = system_components_1.default({
    is: _1.Flex,
    p: [
        3,
        4
    ],
    flexDirection: "column",
    align: "center",
    justify: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    bg: "dark"
}, 'minHeight', 'backgroundSize', 'backgroundPosition', 'backgroundImage');
exports.Banner.displayName = 'Banner';
exports.default = exports.Banner;
