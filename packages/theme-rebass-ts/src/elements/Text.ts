exports.default = {
  name: "Text",
  description: "A text component",
  type: "div",
  props: {
    m: 0
  },
  style: {},
  system: [
    "space",
    "color",
    "fontSize",
    "fontWeight",
    "textAlign",
    "lineHeight"
  ],
  examples: [
`<Text
  textAlign='center'
  fontWeight='bold'
  children='Hello'
/>`
]
}
    