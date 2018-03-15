exports.default = {
  name: "Root",
  description: "A root component",
  type: "div",
  props: {
    fontFamily: "sans"
  },
  style: {
    "& *": {
      boxSizing: "border-box"
    }
  },
  system: [
    "fontFamily",
    "space",
    "color"
  ],
  examples: [
`<Root/>`
]
}
    