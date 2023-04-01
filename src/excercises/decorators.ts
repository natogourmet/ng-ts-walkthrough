function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class MyClass {
  public myProperty: string = "myProperty";
  public hello: string = "override";

  constructor() {
    console.log("new property: ", this.newProperty);
    console.log("override: ", this.hello);
  }
}