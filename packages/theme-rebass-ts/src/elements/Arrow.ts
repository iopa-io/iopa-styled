exports.default = {
  name: "Arrow",
  description: "An arrow Component",
  type: "div",
  props: {
    direction: "down",
    k: 5
  },
  style: {
    display: "inline-block",
    width: 0,
    height: 0,
    verticalAlign: "middle",
    borderRight: ".3125em solid transparent",
    borderLeft: ".3125em solid transparent",
    borderTop: "${props.direction === 'down' ? '.4375em solid'  : null}",
    borderBottom: "${props.direction === 'up' ?  '.4375em solid' : null}"
  },
  system: [
    "space",
    "color"
  ],
  examples: [
`<Arrow direction='down' />`
]
}
    