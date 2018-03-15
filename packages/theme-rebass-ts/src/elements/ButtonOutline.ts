exports.default = {
  name: "ButtonOutline",
  description: "A buttonoutline component",
  type: "Button",
  props: {
    color: "blue",
    bg: "transparent"
  },
  style: {
    boxShadow: "inset 0 0 0 2px",
    "&:hover": {
      color: "white",
      backgroundColor: "${props.theme.colors.blue}"
    },
    "&:focus": {
      boxShadow: "inset 0 0 0 2px, 0 0 0 2px"
    },
    "&:active": {
      color: "white",
      backgroundColor: "${props.theme.colors.blue}",
      boxShadow: "inset 0 0 0 2px ${props.theme.colors[props.color]}, inset 0 0 8px ${props.theme.colors.darken[1]}"
    }
  },
  system: [],
  examples: [
`<ButtonOutline
  children='Hello'
/>`
]
}
    