// create a decorator factory
function Log(logString: string) {
  console.log("from Log decorator factory");
  return function (constructor: Function) {
    // console.log("now is printing from decorator...");
    console.log("from Log decorator ........");

    console.log("logString = ", logString);
    console.log("constructor = ", constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("from WithTemplate decorator factory");

  return function (constructor: any) {
    console.log("from WithTamplate decorator ........");

    const p = new constructor();
    const hookElement = document.getElementById(hookId);
    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Log("LOGIN - PERSON")
@WithTemplate("<h1>This is from WithTemplate </h1>", "apple")
class Person {
  name = "Rose";

  constructor() {
    console.log("Create a person object...");
  }
}

//const aa = new Person();

//console.log("aa = ", aa);
