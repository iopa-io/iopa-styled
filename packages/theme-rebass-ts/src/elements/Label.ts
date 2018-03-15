exports.default = {
  name: "Label",
  description: "A label component",
  type: "label",
  props: {
    fontSize: 1,
    mb: 1,
    align: "center"
  },
  style: {
    display: "flex"
  },
  system: [
    "alignItems",
    "space",
    "color"
  ],
  examples: [
`<Label>
  Hello Label
</Label>`
]
}
    