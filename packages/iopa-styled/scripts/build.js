const fs = require('fs-extra'),
 path = require('path'),
pretty = require('stringify-object'),
 cwd = require('process').cwd();

var config = require(path.resolve(cwd, 'src/lib/styles.json'));

fs.emptyDirSync(path.join(cwd, 'build'));
// /// <reference path="../node_modules/styled-system-types/dist/styled-system/index.d.ts" />

var template = (component) => `
import system from 'system-components';
import { StyledComponentClass } from 'styled-components';
${(component.typeProps.length > 0) ? `import { ${component.typeProps.join(', ')} } from 'styled-system-types';` : ''}
${`${/^[A-Z]/.test(component.type) ? `import { ${component.type} } from './'
` : ""}
export interface ${component.name}Props
${(component.typeProps.length > 0) ? `extends ${component.typeProps.join(', ')} ` : ''} ${(Object.keys(component.coreProps).length > 0) ? pretty(component.coreProps) : '{}'}`} 

export const ${component.name} : StyledComponentClass<${component.name}Props & React.HTMLProps<HTMLElement>, any> = system(${pretty(component.props, {
    indent: '  ',
    singleQuotes: false
  }).replace('"$$TYPE$$"', /^[A-Z]/.test(component.type) ? component.type : '"' + component.type + '"')}` +
  `${(component.style == '') ? '' : SREG.test(component.style) ? ", props => (" + component.style + ")" : ", " + component.style}` +
  `${(component.system.length > 0) ? "," + component.system.map(x => `'${x}'`).join(', ') : ""})

${component.name}.displayName = '${component.name}'

export default ${component.name}

`
var SREG = /\$\{.*\}/;

// PROPTYPES
const unique = arr => [...new Set(arr)]
const styledsystemStyles = require('styled-system').styles;

const dict = Object.keys(styledsystemStyles)
  .map(key => ({
    key,
    propNames: Object.keys(styledsystemStyles[key].propTypes || {})
  }))
  .reduce((acc, b) => {
    const vals = b.propNames.reduce((a, name) => ({
      ...a,
      [name]: b.key
    }), {})
    return { ...acc, ...vals }
  }, {})

const getSystemKeys = defaultProps => Object.keys(defaultProps || {})
  .map(key => dict[key])
  .filter(key => !!key)

const getOtherKeys = defaultProps => Object.keys(defaultProps || {})
  .filter(key => !dict[key])
  .filter(key => ['type', 'is', 'children'].indexOf(key) == -1)

const getTypeProps = keys => keys
  .map(f => f.charAt(0).toUpperCase() + f.substr(1) + "Props")

/*
const getFuncs = keys => keys
.map(f => styledsystemStyles[f] || f)
.reduce((a, f) => Array.isArray(f) ? [ ...a, ...f ] : [ ...a, f ], [])

const getPropTypes = keys => keys
.filter(key => typeof key === 'string')
.filter(key => typeof styles[key] === 'function')
.map(key => styles[key].propTypes || {})
.reduce((a, propType) => ({ ...a, ...propType }), {}) */

const getPropTypeKeys = function (component) {
  const systemKeys = unique([...getSystemKeys(component.props), ...component.system]);
  component.typeProps = getTypeProps(systemKeys);

  const otherKeys = getOtherKeys(component.props)
  let otherProps = {};
  otherKeys.forEach(key => {
    let value = component.props[key];
    let valuetype = typeof value;
    otherProps[key] = valuetype;
  }
  )
  component.coreProps = otherProps;
}

var createFunctionalStyle = function createFunctionalStyle(style, indent) {
  let next = [];
  for (let key in style) {
    let keydesc = " ".repeat(indent) + (/^[A-Za-z]/.test(key) ? key : '"' + key + '"')
    let value = style[key];
    if (typeof value == 'object') {
      next.push(keydesc + ': ' + createFunctionalStyle(value, indent + 2));
      continue;
    } else if (SREG.test(value)) {
      next.push(keydesc + ': `' + value + '`');
      continue;
    }
    next.push(keydesc + ': "' + value + '"')
  }
  return (next.length > 0) ? '{\n' + next.join(',\n') + '\n' + " ".repeat(indent - 2) + '}' : ''
};

indexts = `export  { Flex, Box } from 'grid-styled';\n`;

config.components.forEach((component) => {

  const filename = path.join(cwd, 'build', component.name + '.ts');
  getPropTypeKeys(component);
  component.props = Object.assign({ is: "$$TYPE$$" }, component.props);
  component.style = createFunctionalStyle(component.style, 2);

  fs.writeFileSync(filename, template(component));
  indexts += `export { ${component.name} } from './${component.name}';\n`
}
)

fs.writeFileSync(path.resolve(cwd, 'build', 'index.ts'), indexts, {encoding: 'utf8'});

