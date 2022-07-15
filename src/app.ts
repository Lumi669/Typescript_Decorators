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
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalconstructor: T
  ) {
    return class extends originalconstructor {
      constructor(..._: any[]) {
        super();
        console.log("from WithTamplate decorator ........");
        const hookElement = document.getElementById(hookId);
        if (hookElement) {
          hookElement.innerHTML = template;
          hookElement.querySelector("h1")!.textContent = this.name;
        }
      }
    };
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

const aa = new Person();
console.log("aa = ", aa);

// define a property decorator
function Logger(target: any, propertyName: string | Symbol) {
  console.log("Property decorator called . . .");
  console.log("target = ", target);
  console.log("type of target = ", typeof target);
  console.log(" propertyName = ", propertyName);
}

//define an accessor decorator
function Logger2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator is called . . . ");
  console.log("target from accessor decorator = ", target);
  console.log("type of accessor decorator target = ", typeof target);
  console.log("name from accessor decorator = ", name);
  console.log("descriptor from accessor decorator = ", descriptor);
  console.log(
    "typeof descriptor from accessor decorator = ",
    typeof descriptor
  );
}

//difine a method accessor
function Logger3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator is called . . . ");
  console.log("target from method decorator = ", target);
  console.log("type of method decorator target = ", typeof target);
  console.log("name from method decorator = ", name);
  console.log("descriptor from method decorator = ", descriptor);
}

//define a parameter decorator
function Logger4(target: any, name: string | symbol, position: number) {
  console.log("Parameter decorator is called . . . ");
  console.log("target from parameter decorator = ", target);
  console.log("type of parameter decorator target = ", typeof target);
  console.log("name from parameter decorator = ", name);
  console.log("descriptor from parameter decorator = ", position);
}

class Product {
  @Logger
  title: string;
  private _price: number;

  constructor(p: number) {
    this._price = p;
    this.title = "bb";
  }

  @Logger2
  set price(v: number) {
    if (v > 0) {
      this._price = v;
    }
    throw new Error("");
  }

  @Logger3
  getPriceWithTax(@Logger4 tax: number) {
    return this._price * (1 + tax);
  }
}

//create an autobind decorator
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjustDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustDescriptor;
}
// create a class Printer
class Printer {
  message = "This worksss";

  @Autobind //add Autobind decorator
  showMessage() {
    console.log("this.message = ", this.message);
  }
}

const p = new Printer();
// p.showMessage();
const button = document.querySelector("button")!;

//javascript way to bind
// button.addEventListener("click", p.showMessage.bind(p));

//decorator way to bind
button.addEventListener("click", p.showMessage);

//demonstrate validation with decorators
//here not use shorthand version because will add decorator to properties
class Course {
  title: string;
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm?.addEventListener("submit", (event) => {
  //call event.preventDefault so that we don't submit the form
  // and send no HTTP requests.
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;
  const title = titleEl.value;
  const price = +priceEl.value; //+ convert it to a number
  console.log("price = ", price);
  //create a new course instance
  const createdCourse = new Course(title, price);
  console.log("createdCourse = ", createdCourse);
});
