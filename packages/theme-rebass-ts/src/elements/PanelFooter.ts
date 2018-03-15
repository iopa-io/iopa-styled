exports.default = {
  name: "PanelFooter",
  description: "A panelfooter component",
  type: "footer",
  props: {
    fontSize: 1,
    p: 2,
    bg: "white",
    borderTop: 1,
    borderColor: "gray"
  },
  style: {},
  system: [],
  examples: [
`<Panel color='blue'>
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
    