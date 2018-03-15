exports.default = {
  name: "Input",
  description: "An input component",
  type: "input",
  props: {
    type: "text",
    fontSize: "inherit",
    lineHeight: "inherit",
    px: 1,
    py: 2,
    m: 0,
    width: 1,
    border: 0,
    borderColor: "gray",
    boxShadow: 1,
    borderRadius: 2,
    color: "inherit",
    bg: "transparent"
  },
  style: {
    fontFamily: "inherit",
    display: "inline-block",
    verticalAlign: "middle",
    border: 0,
    appearance: "none",
    "&:focus": {
      outline: "none",
      boxShadow: "inset 0 0 0 1px ${props.theme.colors.blue}"
    },
    "&:disabled": {
      opacity: 0.25
    }
  },
  system: [],
  examples: [
`<Input
  defaultValue='Hello'
  placeholder='Input'
/>`
]
}
    