exports.default = {
  name: "Dot",
  description: "A dot component",
  type: "button",
  props: {
    m: 0,
    p: 0,
    size: 16,
    bg: "darken.1",
    borderRadius: 99999,
    border: 4,
    borderColor: "transparent",
    focus: {
      backgroundColor: "blue"
    },
    hover: {
      backgroundColor: "blue"
    },
    disabledStyle: {
      opacity: 0.25
    }
  },
  style: {
    appearance: "none",
    backgroundClip: "padding-box"
  },
  system: [
    "size",
    "space",
    "color"
  ],
  examples: [
`<Flex>
  <Dot bg='black' />
  <Dot />
  <Dot />
</Flex>`
]
}
    