"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
var babel = require('@babel/standalone');
var parseJSX = function parseJSX(raw) {
    return babel.transform(raw, {
        plugins: [[require('@babel/plugin-transform-react-jsx'), {
                    useBuiltIns: true
                }]]
    }).code;
};
class ProvideState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            toggle: () => { this.setState({ flag: !this.state.flag }); }
        };
    }
    render() {
        var children = this.props.children;
        return children(Object.assign({}, this.props, this.state));
    }
}
function createExampleComponent(config, lib) {
    let name = config.name, imports = [name].concat(config.imports || []), jsx = config.examples[0];
    try {
        var el = parseJSX(jsx);
        el.replace(/React.createElement\(([A-Z]\w+),/igm, function (m, p1) {
            if (imports.indexOf(p1) == -1)
                imports.push(p1);
            return m;
        });
        var scope = imports.map(function (key) {
            return lib[key];
        });
        var create = new Function('React', ...imports, 'return function(props){ return ' + el + '}');
        var Comp = create.apply(undefined, [React].concat(scope));
        Comp.displayName = name;
        var x = (props) => React.createElement(ProvideState, props, Comp);
        x.displayName = "Example." + name;
        return x;
    }
    catch (e) {
        console.log(name);
        console.log(e);
        return null;
    }
}
exports.default = createExampleComponent;
;
