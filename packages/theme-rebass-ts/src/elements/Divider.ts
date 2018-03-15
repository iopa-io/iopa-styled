exports.default = {
  name: "Divider",
  description: "A divider component",
  type: "hr",
  props: {
    mx: 0,
    my: 3,
    border: 0,
    borderBottom: 1,
    borderColor: "gray"
  },
  style: {},
  system: [
    "space",
    "color"
  ],
  examples: [
`<Divider
  w={1}
  color='blue'
/>`
]
}
    