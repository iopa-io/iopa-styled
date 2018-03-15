exports.default = {
  name: "Radio",
  description: "A radio component",
  type: "input",
  props: {
    type: "radio",
    m: 0,
    mr: 2
  },
  style: {},
  system: [
    "space",
    "color"
  ],
  examples: [
`<div>
  <Label>
    <Radio
      name='radio'
      defaultChecked
    />
    Hello
  </Label>
  <Label>
    <Radio name='radio' />
    Beep
  </Label>
</div>`
]
}
    