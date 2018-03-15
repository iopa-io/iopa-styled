import createExample from './createExample';
import * as React from 'react';

export default function (styles: any, library: [string, React.StatelessComponent], options: any = {}) {

 let config: any[] = styles.components;

  return config.reduce(function (a, b) {
    return Object.assign(a, { [ b.name] : createExample(b, library) });
  }, {});

};