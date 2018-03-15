exports.default = {
  name: "Close",
  description: "A close component",
  type: "ButtonTransparent",
  props: {
    p: 0,
    fontSize: 3,
    lineHeight: 1,
    children: "×"
  },
  style: {
    width: "24px",
    height: "24px"
  },
  system: [],
  examples: [
`<Close />`
]
}
    