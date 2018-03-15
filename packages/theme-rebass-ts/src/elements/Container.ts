exports.default = {
  name: "Container",
  description: "A container component",
  type: "Box",
  props: {
    px: 3,
    mx: "auto",
    maxWidth: 1024
  },
  style: {},
  system: [
    "maxWidth"
  ],
  examples: [
`<Container>
  Hello
</Container>`
]
}
    