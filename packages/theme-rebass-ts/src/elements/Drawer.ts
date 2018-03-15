exports.default = {
  name: "Drawer",
  description: "A drawer component",
  type: "div",
  props: {
    color: "white",
    bg: "dark",
    open: false,
    size: 320,
    position: "left"
  },
  style: {
    position: "fixed",
    overflowX: "hidden",
    overflowY: "auto",
    transitionProperty: "transform",
    transitionDuration: ".2s",
    transitionTimingFunction: "ease-out",
    transform: "${props.open ? null : { left: 'translateX(-100%)', right: 'translateX(100%)', top: 'translateY(-100%)', bottom: 'translateY(100%)'}[props.position]}",
    top: "${/^(top|left|right)$/.test(props.position) ? 0 : null}",
    bottom: "${/^(bottom|left|right)$/.test(props.position) ? 0 : null}",
    left: "${/^(left|top|bottom)$/.test(props.position) ? 0 : null}",
    right: "${/^(right|top|bottom)$/.test(props.position) ? 0 : null}",
    width: "${/^(left|right)$/.test(props.position) ? props.size + 'px' : null }",
    height: "${/^(left|right)$/.test(props.position) ? null : props.size + 'px' }"
  },
  system: [
    "size",
    "space",
    "color"
  ],
  examples: [
`<div>
  <Button
    onClick={e => props.toggle()}
    children='Toggle Drawer'
  />
  {props.flag && (
    <Position
      position="fixed"
      top={0}
      right={0}
      bottom={0}
      left={0}
      onClick={e => props.toggle()}
    />
  )}
  <Drawer
    open={props.flag}
    position='right'
    p={3}
    color='white'
    bg='dark'>
    <Heading>Hello</Heading>
  </Drawer>
</div>`
]
}
    