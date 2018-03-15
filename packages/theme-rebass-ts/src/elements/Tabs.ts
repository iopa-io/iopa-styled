exports.default = {
  name: "Tabs",
  description: "A tabs component",
  type: "Flex",
  props: {
    borderBottom: 1,
    borderColor: "gray"
  },
  style: {},
  system: [],
  examples: [
`<Tabs>
  <Tab borderColor='blue'>
    Beep
  </Tab>
  <Tab>
    Boop
  </Tab>
  <Tab>
    Bop
  </Tab>
</Tabs>`
]
}
    