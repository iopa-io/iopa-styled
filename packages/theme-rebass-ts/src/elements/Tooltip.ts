exports.default = {
  name: "Tooltip",
  description: "A tooltip component",
  type: "div",
  props: {
    color: "white",
    bg: "dark"
  },
  style: {
    display: "inline-block",
    position: "relative",
    color: "inherit",
    backgroundColor: "transparent",
    "&::before": {
      display: "none",
      content: "'${props.text}'",
      position: "absolute",
      bottom: "100%",
      left: "50%",
      transform: "translate(-50%, -4px)",
      whiteSpace: "nowrap",
      fontSize: "${props.theme.fontSizes[0]}pt",
      paddingTop: "4px",
      paddingBottom: "4px",
      paddingLeft: "8px",
      paddingRight: "8px",
      color: "${props.theme.colors[props.color]}",
      backgroundColor: "${props.theme.colors[props.bg]}",
      borderRadius: "${props.theme.radii[1] + 'px'}"
    },
    "&::after": {
      display: "none",
      position: "absolute",
      bottom: "100%",
      left: "50%",
      transform: "translate(-50%, 8px)",
      content: " ",
      borderWidth: "6px",
      borderStyle: "solid",
      borderColor: "transparent",
      borderTopColor: "${props.theme.colors[props.bg]}"
    },
    "&:hover": {
      "&::before, &::after": {
        display: "block"
      }
    }
  },
  system: [],
  examples: [
`<Tooltip text='Hello'>
  <Text>
    Hover Me
  </Text>
</Tooltip>`
]
}
    