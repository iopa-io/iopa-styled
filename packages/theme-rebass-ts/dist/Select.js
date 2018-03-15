"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_components_1 = require("system-components");
exports.Select = system_components_1.default({
    is: "select",
    m: 0,
    px: 1,
    py: 2,
    width: 1,
    border: 0,
    borderColor: "gray",
    boxShadow: 1,
    borderRadius: 2,
    color: "inherit",
    bg: "transparent"
}, props => ({
    fontFamily: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit",
    appearance: "none",
    width: "100%",
    border: "0",
    backgroundImage: `url('${encodeURI("data:image/svg+xml,<svg xmlns='http://www.w3c.org/2000/svg' width='32' height='32' viewbox='0 0 32 32' fill='tomato'> <path d='M0 6 L32 6 L16 28 z' /> </svg>")}')`,
    backgroundSize: "8px 8px",
    "&:disabled": {
        opacity: "0.25"
    },
    "&:focus": {
        outline: "none",
        boxShadow: `inset 0 0 0 1px ${props.theme.colors.blue}`
    }
}));
exports.Select.displayName = 'Select';
exports.default = exports.Select;
