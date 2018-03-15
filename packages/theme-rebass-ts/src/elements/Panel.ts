exports.default = {
  name: "Panel",
  description: "A panel component",
  type: "div",
  props: {
    bg: "white",
    borderRadius: 2,
    border: 1,
    borderColor: "gray"
  },
  style: {
    overflow: "hidden"
  },
  system: [
    "space"
  ],
  examples: [
`<Panel color='blue'>
  <PanelHeader
    color='white'
    bg='blue'>
    Hello
  </PanelHeader>
  <Box p={3}>
    <Subhead>
      Panel
    </Subhead>
  </Box>
  <PanelFooter color='blue'>
    Footer
  </PanelFooter>
</Panel>`
]
}
    