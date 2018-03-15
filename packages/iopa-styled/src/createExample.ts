import * as React from 'react';
var babel = require('@babel/standalone');

var parseJSX = function parseJSX(raw) {
  return babel.transform(raw, {
    plugins: [[require('@babel/plugin-transform-react-jsx'), {
      useBuiltIns: true
    }]]
  }).code;
};

class ProvideState extends React.Component<any, any>  {

  constructor(props)
  {
    super(props);

    this.state = {
      flag: false,
      toggle: () => { this.setState({flag: !this.state.flag}) }
    }
  }

  render() {
    var children = this.props.children as (props) => any;
    return children(Object.assign({}, this.props, this.state));
  }

}

export default function createExampleComponent(config, lib): React.StatelessComponent {
  let name = config.name,
    imports = [name].concat(config.imports || []),
    jsx: string = config.examples[0];
  try {
    var el: string = parseJSX(jsx);

    el.replace(/React.createElement\(([A-Z]\w+),/igm, function (m, p1) {
      if (imports.indexOf(p1) == -1) imports.push(p1);
      return m;
    });

    var scope = imports.map(function (key) {
      return lib[key];
    });

   var create = new Function('React', ...imports, 'return function(props){ return ' + el + '}');

    var Comp = create.apply(undefined, [React].concat(scope));
    Comp.displayName = name;

    var x:any = (props: any) => React.createElement(ProvideState, props, Comp );
    x.displayName = "Example." + name;
    return x;
  } catch (e) {
    console.log(name);
    console.log(e);
    return null;
  }
};