
const path = require('path'),
 fs = require('fs-extra'),
util = require('util'),
pretty = require('stringify-object');
const cwd = require('process').cwd();

var package = require(path.resolve(cwd, "package.json"));

fs.emptyDirSync(path.resolve(cwd, "src/elements"));

var components = require(path.resolve(cwd, './src/lib/styles.json')).components;

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

    fs.writeFileSync(path.resolve(cwd, "src/elements", component.name + ".ts"), template);
    
});
