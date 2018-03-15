exports.default = {
  name: "ButtonTransparent",
  description: "A buttontransparent component",
  type: "Button",
  props: {
    color: "inherit",
    bg: "transparent"
  },
  style: {
    "&:hover": {
      color: "${props.theme.colors[props.color]}",
      backgroundColor: "transparent"
    },
    "&:focus": {
      boxShadow: "inset 0 0 0 2px, 0 0 0 2px"
    },
    "&:active": {
      backgroundColor: "transparent",
      boxShadow: "inset 0 0 0 2px, inset 0 0 8px ${props.theme.colors.darken[1]}"
    }
  },
  system: [],
  examples: [
`<ButtonTransparent>
  Hello
</ButtonTransparent>`
]
}
    