exports.default = {
  name: "Card",
  description: "A card component",
  type: "div",
  props: {
    p: 2,
    bg: "white",
    borderRadius: 2,
    boxShadow: 2
  },
  style: {
    overflow: "hidden"
  },
  system: [
    "space",
    "color"
  ],
  examples: [
`<Card width={256}>
  <BackgroundImage
    ratio={1}
    src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
  />
  <Subhead p={2}>
    Hello
  </Subhead>
</Card>`
]
}
    