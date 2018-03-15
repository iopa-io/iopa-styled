exports.default = {
  name: "Toolbar",
  description: "A toolbar component",
  type: "Flex",
  props: {
    px: 2,
    color: "white",
    bg: "dark",
    align: "center",
    minHeight: "48px"
  },
  style: {
    WebkitFontSmoothing: "antialiased"
  },
  system: [
    "minHeight"
  ],
  examples: [
`<Toolbar>
  <NavLink>
    Hello
  </NavLink>
  <NavLink ml='auto'>
    Beep
  </NavLink>
  <NavLink>
    Boop
  </NavLink>
</Toolbar>`
]
}
    