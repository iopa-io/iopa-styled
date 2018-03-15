## iopa-styled

This mono repository contains the following packages
   - `iopa-styled` Standardardized format and utility functions for defining styled react components using compositor lab open format, with TypeScript and [`styled-system`](https://github.com/jxnblk/styled-system) support
   - `styled-system-types` typescript definitions for [`styled-system`](https://github.com/jxnblk/styled-system)
   - `theme-rebass-ts` the rebass theme with optimized iopa-styled authoring, typescript support and blazing fast configuration-free build with typescript support using `fuse-box-react-scripts-ts`

### Installation

```bash
lerna bootstrap
```

### Usage

See the `theme:*` in package.json and the `theme-rebass-ts` package in this repository for an example of how to use the `iopa-styled` utilities.  Essentially every component is defined in a very straight forward way, and the scripts convert this format into lab open format for use in other authorings, and in transpiled typescript to javascript for use in react applications such as the `/docs` folder of `theme-rebass-ts`


```js
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
``


### Rebuilding `styled-system-types`

```bash
npm run types:build
```


### Rebuilding `iopa-styled`

```bash
npm run iopa:build
```

### Rebuilding `theme-rebass-ts`

```bash
npm run theme:dist
```

### Export `theme-rebass-ts` to compositor lab.json file

```bash
npm run theme:export
```

Export files are in [`packages/theme-rebass-ts/src/lib`](https://github.com/iopa-io/iopa-styled/blob/master/packages/theme-rebass-ts/src/lib/styles.json) folder (copy `styles.json` as `lab.json`)

### Import compositor lab.json file to `theme-rebass-ts`

```bash
cp ../mydocfolder/lab.json ./packages/theme-rebass-ts/src/lib/styles.json
cp ../mydocfolder/theme.json ./packages/theme-rebass-ts/src/lib/theme.json
npm run theme:import
```

Imported files are in [`packages/theme-rebass-ts/src/elements`](https://github.com/iopa-io/iopa-styled/tree/master/packages/theme-rebass-ts/src/elements) folder;  run `theme:dist` to build distribution version


## Inspiration

This work builds heavily on the [`styled-system`](https://github.com/jxnblk/styled-system) and [`system-components`](https://github.com/jxnblk/styled-system/tree/master/system-components) approach to using [`styled-components`](https://github.com/styled-components/styled-components), `glamorous` and other css-in-js libraries.  In fact its little more than an implementation of the open source compsitor lab format with an end to end open source authoring experience.

The reason for writing it was to standardize themes such as `rebass` for ease of importing and exporting into third party authoring tools such as lab, but providing an open source alternative, and to support TypeScript or Flow (purely for static type authoring experience).  It replaces the need for packages such as `dxs` as `lab-cli` as while both worked well, they had some limitations / quirks in our use case and did not support theme examples fully

## License and credits

Apache 2.0

The Rebass theme is reproduced as close as possible to the original theme under its open source license and was converted by hand/with some automation to a standard [`system-components`](https://github.com/jxnblk/styled-system/tree/master/system-components) / [lab open format]
(https://compositor.io/blog/open-formats/).  

The IOPA styled definition is based on the compositor open source format, but with some non-breaking version fields added.

The typescript defintions for styled-system are created systematically from the current version of the actual [`styled-system`](https://github.com/jxnblk/styled-system) npm package.   They are not yet comprehensively tested to submit to DefinitelyTyped for all other uses of [`styled-system`](https://github.com/jxnblk/styled-system), but are robust for this use case.

## Roadmap

Add support for `glamorous` and other alternatives to `styled-components`.
Add support for composite and stateful components (only covers pure styled components)
Add additional themes based on [AtlasKit](https://bitbucket.org/atlassian/atlaskit-mk-2) and other `styled-components`-based themes