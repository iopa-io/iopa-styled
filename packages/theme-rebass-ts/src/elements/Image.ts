exports.default = {
  name: "Image",
  description: "An image component",
  type: "img",
  props: {},
  style: {
    display: "block",
    maxWidth: "100%",
    height: "auto"
  },
  system: [
    "space",
    "width",
    "color"
  ],
  examples: [
`<Image
  src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
/>`
]
}
    