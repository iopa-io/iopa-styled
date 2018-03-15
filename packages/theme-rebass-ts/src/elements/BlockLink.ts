exports.default = {
  name: "BlockLink",
  description: "A blocklink component",
  type: "a",
  props: {
    color: "inherit"
  },
  style: {
    display: "block",
    textDecoration: "none"
  },
  system: [
    "space",
    "width"
  ],
  examples: [
`<BlockLink
  href='#!'
  children='Hello'
/>`
]
}
    