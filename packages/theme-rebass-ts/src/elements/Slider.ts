exports.default = {
  name: "Slider",
  description: "A slider component",
  type: "input",
  props: {
    type: "range",
    width: 1,
    mx: 0,
    my: 2,
    color: "inherit",
    bg: "gray",
    borderRadius: 99999
  },
  style: {
    display: "block",
    height: "4px",
    cursor: "pointer",
    appearance: "none",
    "&::-webkit-slider-thumb": {
      width: "16px",
      height: "16px",
      backgroundColor: "currentcolor",
      border: 0,
      borderRadius: "99999px",
      appearance: "none"
    }
  },
  system: [],
  examples: [
`<Slider />`
]
}
    