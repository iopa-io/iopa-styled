exports.default = {
  name: "Progress",
  description: "A progress component",
  type: "progress",
  props: {
    width: 1,
    m: 0,
    px: 0,
    color: "blue",
    bg: "gray",
    borderRadius: 2
  },
  style: {
    boxSizing: "border-box",
    diplay: "block",
    height: "4px",
    overflow: "hidden",
    appearance: "none",
    "&::-webkit-progress-bar": {
      backgroundColor: "${props.theme.colors.gray}"
    },
    "&::-webkit-progress-value": {
      backgroundColor: "currentcolor"
    },
    "&::-moz-progress-bar": {
      backgroundColor: "currentcolor"
    }
  },
  system: [],
  examples: [
`<Progress
  value={1/3}
/>`
]
}
    