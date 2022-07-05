// // create a decorator factory
// function Log(logString: string) {
//   return function (constructor: Function) {
//     // console.log("now is printing from decorator...");
//     console.log("logString = ", logString);
//     console.log("constructor = ", constructor);
//   };
// }

function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookElement = document.getElementById(hookId);
    if (hookElement) {
      hookElement.innerHTML = template;
    }
  };
}

// @Log("LOGIN - PERSON")

@WithTemplate("<p>This is from WithTemplate </p>", "apple")
class Person {
  name = "Rose";

  constructor() {
    console.log("Create a person object...");
  }
}

//const aa = new Person();

//console.log("aa = ", aa);
