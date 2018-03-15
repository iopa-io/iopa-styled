exports.default = {
  name: "Carousel",
  description: "A carousel component",
  type: "Flex",
  props: {
    width: 1
  },
  style: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    "& > div": {
      flex: "none",
      width: "100%"
    },
    "& > div:first-child": {
      marginLeft: "${(props.index * -100)}%",
      transitionProperty: "margin",
      transitionDuration: ".2s",
      transitionTimingFunction: "ease-out"
    }
  },
  system: [
    "space",
    "color"
  ],
  examples: [
`<Carousel
  index={props.checked ? 1 : 0}>
  <Box bg='blue'>
    <Flex
      p={6}
      justify='center'
      align='center'>
      <Heading>Hello</Heading>
    </Flex>
  </Box>
  <Box bg='gray'>
    <Flex
      p={6}
      justify='center'
      align='center'>
      <Heading>Rebass</Heading>
    </Flex>
  </Box>
</Carousel>`
]
}
    