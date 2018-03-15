exports.default = {
  name: "Badge",
  description: "A badge component",
  type: "div",
  props: {
    fontSize: 0,
    px: 2,
    py: 1,
    mx: 1,
    color: "white",
    bg: "blue",
    fontWeight: "bold",
    borderRadius: 2
  },
  style: {
    WebkitFontSmoothing: "antialiased",
    display: "inline-block",
    verticalAlign: "middle"
  },
  system: [],
  examples: [
`<Heading>
  Hello
  <Badge>
    Beep
  </Badge>
</Heading>`
]
}
    