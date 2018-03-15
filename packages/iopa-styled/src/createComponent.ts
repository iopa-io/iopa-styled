// Copied from DXS under MIT license, amended to return style system 

import system from 'system-components';
import { withTheme } from 'styled-components';

var SREG = /\$\{.*\}/;

var createFunctionalStyle = function createFunctionalStyle(props, style) {
  let next = {};
  for (let key in style) {
    let value = style[key];
    if (typeof value == 'object') {
       value = createFunctionalStyle(props, value);
    } else if (SREG.test(value)) {
      var fn = new Function('props', 'return `' + value + '`');
      next[key] = fn(props);
      continue;
    }
    next[key] = value;
  }
  return next;
};

export default function (config, library = []) {

  var tag = library[config.type] || config.type;

  let style = typeof config.style === 'object' ? function (props) {
    return createFunctionalStyle(props, config.style);
  } : config.style;
  
  console.log(config.name);  
  
  if (tag == 'div') tag = undefined;
 return system(Object.assign({ is: tag }, config.props), style, ...config.system);
};