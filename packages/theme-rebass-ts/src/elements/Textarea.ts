exports.default = {
  name: "Textarea",
  description: "A textarea component",
  type: "textarea",
  props: {
    px: 1,
    py: 2,
    m: 0,
    width: 1,
    fontSize: "inherit",
    color: "inherit",
    bg: "transparent",
    border: 0,
    borderColor: "gray",
    boxShadow: 1,
    borderRadius: 2
  },
  style: {
    fontFamily: "inherit",
    appearance: "none",
    "&:focus": {
      outline: "none",
      boxShadow: "${'inset 0 0 0 1px' + props.theme.colors.blue}"
    },
    "&:disabled": {
      opacity: 0.25
    }
  },
  system: [],
  examples: [
`<Textarea
  rows={4}
  defaultValue='Hello'
/>`
]
}
    