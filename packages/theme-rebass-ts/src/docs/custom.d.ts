declare module "*.svg" {
    const content: any;
    export default content;
  }

  declare module "*.json" {
    const content: any;
    export default content;
  }

  declare interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}