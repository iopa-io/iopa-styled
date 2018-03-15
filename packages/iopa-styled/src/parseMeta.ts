export default function (styles: any, options: any = {}) {

 let config: any[] = styles.components;

  return config.reduce(function (a, b) {
    let  { name, description, type, keywords } = b;
    return Object.assign(a, { [ b.name] : { name, description, type, keywords } });
  }, {});

};