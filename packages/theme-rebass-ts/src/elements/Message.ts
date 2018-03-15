exports.default = {
  name: "Message",
  description: "A message component",
  type: "Flex",
  props: {
    px: 3,
    py: 2,
    fontWeight: "bold",
    color: "white",
    bg: "blue",
    align: "center",
    minHeight: "48px"
  },
  style: {
    WebkitFontSmoothing: "antialiased"
  },
  system: [
    "minHeight"
  ],
  examples: [
`<Message>
  Hello
</Message>`
]
}
    