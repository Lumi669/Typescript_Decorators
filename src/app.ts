// with decorator
function Log(constructor: Function) {
  console.log("now is printing from decorator...");
  console.log("constructor = ", constructor);
}

@Log
class Person {
  name = "Rose";

  constructor() {
    console.log("Create a person object...");
  }
}

const aa = new Person();

console.log("aa = ", aa);
