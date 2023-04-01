
function whatType<T>(arg: T) {
  return arg;
}

let aString = whatType("hello");
let aNumber = whatType(123);

let anExplicit = whatType<string>('hello');