exports.default = {
  name: "Pre",
  description: "A pre component",
  type: "pre",
  props: {
    fontSize: 1,
    fontFamily: "mono",
    m: 0
  },
  style: {
    overflow: "auto"
  },
  system: [
    "fontFamily",
    "space",
    "color"
  ],
  examples: [
`<Pre
  children="const hello = 'Rebass'"
/>`
]
}
    