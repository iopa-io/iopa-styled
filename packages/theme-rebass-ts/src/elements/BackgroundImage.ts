exports.default = {
  name: "BackgroundImage",
  description: "A backgroundimage component",
  type: "div",
  props: {
    width: 1,
    ratio: 0.75,
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  style: {
    backgroundImage: "url(${props.src})"
  },
  system: [
    "ratio",
    "backgroundSize",
    "backgroundPosition",
    "space",
    "color"
  ],
  examples: [
`<BackgroundImage
  ratio={1/2}
  src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
/>`
]
}
    