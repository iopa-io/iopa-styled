
const path = require('path'),
 fs = require('fs-extra'),
util = require('util'),
pretty = require('stringify-object');

var package = require('./package.json');

fs.emptyDirSync(path.resolve(__dirname, "src/elements"));

var components = require('./src/lib/styles.json').components;

Object.keys(components).forEach((key) => {
    var component = components[key];

    var template = `exports.default = ${pretty(component, {
    indent: '  ',
    singleQuotes: false,
    transform: (obj, prop, originalResult) => {
        if (prop === 'examples') {
            return `[
` + obj[prop].map(function(example){
                return "`" + example
                .replace(/\\n/g, '\n')
                .replace(/\\r/g, '\r')
                .replace(/^"/, '')
                .replace(/"$/, '') + "`";
            }).join(`,
            `) + `\n]`
        } else {
            return originalResult;
        }
    }
})}
    `

    fs.writeFileSync(path.resolve(__dirname, "src/elements", component.name + ".ts"), template);
    
});
