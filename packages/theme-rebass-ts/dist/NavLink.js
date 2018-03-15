"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.NavLink = system_components_1.default({
    is: "a",
    color: "inherit",
    bg: "transparent",
    fontSize: 1,
    fontWeight: "bold",
    p: 2
}, {
    display: "inline-flex",
    alignItems: "center",
    alignSelf: "stretch",
    textDecoration: "none",
    whiteSpace: "nowrap",
    cursor: "pointer",
    "&:disabled": {
        opacity: "0.25"
    }
}, 'width');
exports.NavLink.displayName = 'NavLink';
exports.default = exports.NavLink;
