## iopa-styled

This mono repository contains the following packages
   - `iopa-styled` Standardardized format and utility functions for defining styled react components using compositor lab open format, with TypeScript and `styled-system` support
   - `styled-system-types` typescript definitions for `styled-system`
   - `theme-rebass-ts` the rebass theme with optimized iopa-styled authoring, typescript support and blazing fast configuration-free build with typescript support using `fuse-box-react-scripts-ts`

### Installation

```bash
lerna bootstrap
```


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

Imported files are in `packages/theme-rebass-ts/src/elements` folder;  run `theme:dist` to build distribution version


## Inspiration

This work builds heavily on the `styled-system` and `system-components` approach to using `styled-components`, `glamorous` and other JS-in-css libraries.  In fact its little more than an implementation of the open source compsitor lab format with an end to end open source authoring experience.

The reason for writing it was to standardize themes such as `rebass` for ease of importing and exporting into third party authoring tools such as lab, but providing an open source alternative, and to support TypeScript or Flow (purely for static type authoring experience).  It replaces the need for packages such as `dxs` as `lab-cli` as while both worked well, they had some limitations / quirks in our use case and did not support theme examples fully

## License and credits

Apache 2.0

The Rebass theme is reproduced as close as possible to the original theme under its open source license and was converted by hand/with some automation to a standard `system-components` / lab open-source level.  

The IOPA styled definition is based on the compositor open source format, but with some non-breaking version fields added.

The typescript defintions for styled-system are created systematically from the current version of the actual `styled-system` npm package.   They are not yet comprehensively tested to submit to DefinitelyTyped for all other uses of `styled-system`, but are robust for this use case.

## Roadmap

Add support for `glamorous` and other alternatives to `styled-components`.
Add support for composite and stateful components (only covers pure styled components)
Add additional themes based on AtlasKit and other `styled-components`-based themes