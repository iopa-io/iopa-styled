exports.default = {
  name: "Group",
  description: "A group component",
  type: "Flex",
  props: {},
  style: {
    "& > *": {
      borderRadius: 0
    },
    "& > *:first-child": {
      borderRadius: "${props.theme.radii[2] + 'px'} 0 0 ${props.theme.radii[2] + 'px'}"
    },
    "& > *:last-child": {
      borderRadius: "0 ${props.theme.radii[2] + 'px'} ${props.theme.radii[2] + 'px'} 0"
    }
  },
  system: [],
  examples: [
`<Group>
  <Button children='Beep' />
  <ButtonOutline children='Boop' />
  <ButtonOutline children='Bop' />
</Group>`
]
}
    