exports.default = {
  name: "Switch",
  description: "A switch component",
  type: "div",
  props: {
    role: "checkbox",
    color: "blue",
    borderRadius: "99999px"
  },
  style: {
    display: "inline-flex",
    width: "40px",
    height: "24px",
    backgroundColor: "${props.checked ? props.theme.colors[props.color] : 'transparent'}",
    boxShadow: "inset 0 0 0 2px",
    transitionProperty: "background-color",
    transitionDuration: ".2s",
    transitionTimingFunction: "ease-out",
    userSelect: "none",
    "&::after": {
      content: "' '",
      width: "16px",
      height: "16px",
      margin: "4px",
      borderRadius: "99999px",
      transitionProperty: "transform, color",
      transitionDuration: ".1s",
      transitionTimingFunction: "ease-out",
      transform: "${(props.checked) ? 'translateX(16px)' : 'translateX(0)'}",
      backgroundColor: "${props.checked ? props.theme.colors.white : props.theme.colors[props.color]}"
    }
  },
  system: [
    "space",
    "color"
  ],
  examples: [
`<Switch
  checked={props.flag}
  onClick={e => props.toggle()}
/>`
]
}
    