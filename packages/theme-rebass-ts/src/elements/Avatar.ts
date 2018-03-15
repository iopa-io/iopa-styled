exports.default = {
  name: "Avatar",
  description: "An avatar component",
  type: "img",
  props: {
    size: 48,
    borderRadius: "99999px"
  },
  style: {
    display: "inline-block"
  },
  system: [
    "space",
    "color",
    "size"
  ],
  examples: [
`<Avatar
  size={64}
  src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
/>`
]
}
    