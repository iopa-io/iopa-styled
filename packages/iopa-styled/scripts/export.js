
const path = require('path'),
fs = require('fs-extra'),
util = require('util');

var package = require('./package.json');

let matchExp = /examples: \[([\s\S]*)\]/

fs.readdir(path.resolve(__dirname, "src/elements"), function (err, items) {

    let result = [];
    let index = [];
  
    items.forEach(function (key) {
        if (key.startsWith("_")) return;
        if (!key.endsWith(".ts")) return;

        let name = path.basename(key, ".ts");

        let obj = require(path.resolve(__dirname, "src/elements", key )).default;

       /* let filetext = fs.readFileSync(path.resolve(__dirname, "src/elements", key ), {encoding: 'utf8'});

        let jsx = /examples: \[([\s\S]*)\]/
        .exec(filetext)[1]
        .replace(/^\n/, '')
        .replace(/\n$/, '')
         
        let level = 0;
        let start = 0;
        let examples = [];

        for (var i =0 ; i < jsx.length; i++ ) {
            if (jsx.charAt(i) == '<' && jsx.charAt(i+1) !== '/') level ++;
            else if ((jsx.charAt(i) == '<' && jsx.charAt(i+1) == '/') ||  (jsx.charAt(i) == '/' && jsx.charAt(i+1) == '>')) level --;
            else if ((jsx.charAt(i) == ',' && level == 0) ) {
                examples.push(jsx.substr(start, i-start));
                start = i+1;
            }
    
        }
        examples.push(jsx.substr(start, i-start));

        let pos = filetext.replace(/examples: \[([\s\S]*)\]/, match => 'examples: [' + examples.map(t => JSON.stringify(t)).join(',') + ']')

        let obj = eval(pos); */
        
        result.push(obj);
        index.push("    require('./elements/" + obj.name + "').default");

    });

    fs.emptyDirSync(path.resolve(__dirname, "src/lib"))

    result = {
        "name": package.name,
        "version": package.version,
        "library": "styled-components",
        "librarytype": "iopa-compositor",
        "libraryversion": "1.0.0",
        "components": result
    }

    index = `{
  name: "${package.name}",
  version: "${package.version}",
  library: "styled-components",
  librarytype: "iopa-compositor",
  libraryversion: "1.0.0",
  components: [
` + index.join(',\n')+ "\n  ]\n}"

    fs.writeFileSync(path.resolve(__dirname, "src/lib/styles.json"), JSON.stringify(result, null, 2));
    fs.writeFileSync(path.resolve(__dirname, "src/index.ts"), "export default " + index);

    var theme = require('./src/theme/theme.js').default;
    fs.writeFileSync(path.resolve(__dirname, "src/lib/theme.json"), JSON.stringify(theme, null, 2));

});
