exports.default = {
  name: "Caps",
  description: "A caps component",
  type: "Text",
  props: {
    fontSize: 0,
    letterSpacing: "0.2em"
  },
  style: {
    textTransform: "uppercase"
  },
  system: [
    "letterSpacing"
  ],
  examples: [
`<Caps/>`
]
}
    