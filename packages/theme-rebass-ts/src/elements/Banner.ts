exports.default = {
  name: "Banner",
  description: "A banner component",
  type: "Flex",
  props: {
    p: [
      3,
      4
    ],
    flexDirection: "column",
    align: "center",
    justify: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    bg: "dark"
  },
  style: {},
  system: [
    "minHeight",
    "backgroundSize",
    "backgroundPosition",
    "backgroundImage"
  ],
  examples: [
`<Banner
  color='white'
  bg='gray8'
  backgroundImage='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'>
  <Heading
    f={[ 4, 5, 6, 7 ]}>
    Hello
  </Heading>
</Banner>`
]
}
    