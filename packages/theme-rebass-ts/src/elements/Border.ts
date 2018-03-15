exports.default = {
  name: "Border",
  description: "A border component",
  type: "div",
  props: {
    border: 1,
    borderColor: "gray"
  },
  style: {},
  system: [
    "space",
    "width",
    "color"
  ],
  examples: [
`<Border
  py={2}
  borderTop="5px solid"
  borderBottom="5px solid">
  Hello
</Border>`
]
}
    