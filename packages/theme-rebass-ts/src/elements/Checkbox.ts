exports.default = {
  name: "Checkbox",
  description: "A checkbox component",
  type: "input",
  props: {
    type: "checkbox",
    m: 0,
    mr: 2
  },
  style: {},
  system: [
    "space",
    "color"
  ],
  examples: [
`<Label>
  <Checkbox defaultChecked />
  Hello
</Label>`
]
}
    