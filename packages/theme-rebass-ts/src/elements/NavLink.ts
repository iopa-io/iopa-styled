exports.default = {
  name: "NavLink",
  description: "A navlink component",
  type: "a",
  props: {
    color: "inherit",
    bg: "transparent",
    fontSize: 1,
    fontWeight: "bold",
    p: 2
  },
  style: {
    display: "inline-flex",
    alignItems: "center",
    alignSelf: "stretch",
    textDecoration: "none",
    whiteSpace: "nowrap",
    cursor: "pointer",
    "&:disabled": {
      opacity: 0.25
    }
  },
  system: [
    "width"
  ],
  examples: [
`<NavLink
  href='#!'
  children='Hello'
/>`
]
}
    