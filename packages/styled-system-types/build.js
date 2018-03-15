const fs = require('fs-extra')
const path = require('path')
const util = require('util')

// PROXY node modules
if (!fs.existsSync(path.resolve(__dirname, 'node_modules', 'prop-types', '.$$$proxied'))) {
    fs.moveSync(path.resolve(__dirname, 'node_modules', 'prop-types'), path.resolve(__dirname, 'node_modules', 'react-prop-types'));
    fs.moveSync(path.resolve(__dirname, 'node_modules', 'axe-prop-types'), path.resolve(__dirname, 'node_modules', 'prop-types'));
    var js = fs.readFileSync(path.resolve(__dirname, 'node_modules', 'prop-types', 'index.js'), { encoding: 'utf8' });
    js = js.replace("require('../prop-types')", "require('../react-prop-types')");
    fs.writeFileSync(path.resolve(__dirname, 'node_modules', 'prop-types', 'index.js'), js, { encoding: 'utf8' });
    fs.writeFileSync(path.resolve(__dirname, 'node_modules', 'prop-types', '.$$$proxied'), "");
    console.log("PROXIED")
}

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

const getTypeInfo = proptypes => {
    var result = {};
    Object.keys(proptypes).forEach(key => {
        result[key] = proptypes[key].info
    })
    return result;
}

const getFuncs = keys => keys
    .filter(key => typeof key === 'string')
    .filter(key => typeof styledsystemStyles[key] === 'function')

const getPropTypes = keys => keys
    .filter(key => typeof key === 'string')
    .filter(key => typeof styledsystemStyles[key] === 'function')
    .map(key => ({ [key]: getTypeInfo(styledsystemStyles[key].propTypes) || {} }))
    .reduce((a, propType) => ({ ...a, ...propType }), {})

function template(key, info) {

    var name = key.charAt(0).toUpperCase() + key.substr(1) + "Props";
  
    var result = '';

    result += `  export function ${key}(...args: any[]): any;

`;

    result += `  export interface ${name} {\n`;

    Object.keys(info).forEach(subkey => {

        result += `    ${subkey}${info[subkey].isRequired ? '' : '?'}: `

        var typename = info[subkey].propTypeName.toString();

        switch (typename) {
            case 'oneOfType':
                var value = info[subkey].allowedPropTypes.map(proptype => proptype.info.propTypeName).join(', ');
                switch (value) {
                    case 'number, string':
                        value = 'StyleValue'
                        break;
                    case 'number, string, array':
                        value = 'ResponsiveStyleValue'
                        break;
                    default:

                }
                break;
            case 'object':
                value = 'PseudoStyleValue'
                break;
            default:
                value = typename;
        }
        result += `${value}\n`;
    });

    result += '  }\n\n';

    return result;

}

var proptypes = getPropTypes(Object.keys(styledsystemStyles));

var result = `

declare namespace StyledSystem {
  export interface BaseTheme {
    breakpoints?: number[];
    space?: number[];
    fontSizes?: number[];
    colors?: {
        [name: string]: string;
    };
  }
  
  type ResponsiveValue<T> = T | (T | null)[];
  
  export type StyleValue = number | string;
  export type ResponsiveStyleValue = ResponsiveValue<StyleValue>; 
  
  export type PseudoStyleValue = {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    boxShadow?: number;
  };
`;
getFuncs(Object.keys(styledsystemStyles)).forEach((key) => {
    result += template(key, proptypes[key])
})

result += `}
  
declare module 'styled-system' {
  export = StyledSystem;
}
`

fs.emptyDirSync(path.resolve(__dirname, 'dist', 'styled-system'));

fs.writeFileSync(path.resolve(__dirname, 'dist', 'styled-system', 'index.d.ts'), result)