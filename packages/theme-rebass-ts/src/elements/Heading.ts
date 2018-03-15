exports.default = {
  name: "Heading",
  description: "A heading component",
  type: "h2",
  props: {
    fontSize: 5,
    fontWeight: "bold",
    lineHeight: 1.25,
    m: 0
  },
  style: {},
  system: [
    "color",
    "textAlign"
  ],
  examples: [
`<Heading
  children='Hello'
/>`
]
}
    