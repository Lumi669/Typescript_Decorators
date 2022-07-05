// create a decorator factory
function Log(logString: string) {
  return function (constructor: Function) {
    // console.log("now is printing from decorator...");
    console.log("logString = ", logString);
    console.log("constructor = ", constructor);
  };
}

@Log("LOGIN - PERSON")
class Person {
  name = "Rose";

  constructor() {
    console.log("Create a person object...");
  }
}

const aa = new Person();

console.log("aa = ", aa);
