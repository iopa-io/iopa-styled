exports.default = {
  name: "Code",
  description: "A code component",
  type: "code",
  props: {
    fontSize: 1,
    fontFamily: "mono"
  },
  style: {},
  system: [
    "fontFamily",
    "space",
    "color"
  ],
  examples: [
`<Code
  children='<Hello />'
/>`
]
}
    