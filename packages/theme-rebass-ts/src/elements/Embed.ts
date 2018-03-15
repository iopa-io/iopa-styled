exports.default = {
  name: "Embed",
  description: "An embed component",
  type: "div",
  props: {
    ratio: 0.5625
  },
  style: {
    position: "relative",
    overflow: "hidden",
    "& > iframe": {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      bottom: 0,
      left: 0,
      border: 0
    }
  },
  system: [
    "ratio",
    "space",
    "color"
  ],
  examples: [
`<Embed>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/KQ6zr6kCPj8?ecver=1"
    frameBorder="0"
    allowFullScreen
  />
</Embed>
`
]
}
    