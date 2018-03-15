exports.default = {
  name: "Modal",
  description: "A modal component",
  type: "Position",
  position: "fixed",
  props: {
    top: "50%",
    left: "50%",
    p: 3,
    bg: "white",
    borderRadius: 2,
    maxWidth: "100vw",
    maxHeight: "100vh"
  },
  style: {
    boxShadow: "0 0 0 60vmax ${props.theme.colors.darken[2]}, 0 0 32px ${props.theme.colors.darken[1]}",
    overflow: "auto",
    transform: "translate(-50%, -50%)"
  },
  system: [
    "width",
    "maxWidth",
    "maxHeight"
  ],
  examples: [
`<div>
  <Button
    onClick={e => props.toggle()}
    children='Toggle Modal'
  />
  {props.flag && (
    <div>
      <Position
        position="fixed"
        top={0}
        right={0}
        bottom={0}
        left={0}
        onClick={e => props.toggle()}
      />
      <Modal width={256}>
        <Heading>Hello</Heading>
      </Modal>
    </div>
  )}
</div>`
]
}
    