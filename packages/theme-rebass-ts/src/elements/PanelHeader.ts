exports.default = {
  name: "PanelHeader",
  description: "A panelheader component",
  type: "header",
  props: {
    fontSize: 2,
    p: 2,
    bg: "white",
    borderBottom: 1,
    borderColor: "gray"
  },
  style: {},
  system: [],
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
</Panel>`
]
}
    