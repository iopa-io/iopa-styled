exports.default = {
  name: "Tab",
  description: "A tab component",
  type: "a",
  props: {
    fontSize: 1,
    fontWeight: "bold",
    mr: 3,
    py: 2,
    color: "inherit",
    borderBottom: 2,
    borderColor: "transparent",
    hover: {
      color: "blue"
    }
  },
  style: {
    textDecoration: "none"
  },
  system: [],
  examples: [
`<Tab borderColor='blue'>
  Hello
</Tab>`
]
}
    