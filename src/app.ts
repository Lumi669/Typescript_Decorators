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
  return function (originalconstructor: any) {
    return class extends originalconstructor {
      constructor() {
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
// function Logger(target: any, propertyName: string | Symbol) {
//   console.log("Property decorator called . . .");
//   console.log("target = ", target);
//   console.log("type of target = ", typeof target);
//   console.log(" propertyName = ", propertyName);
// }

// //define an accessor decorator
// function Logger2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Accessor decorator is called . . . ");
//   console.log("target from accessor decorator = ", target);
//   console.log("type of accessor decorator target = ", typeof target);
//   console.log("name from accessor decorator = ", name);
//   console.log("descriptor from accessor decorator = ", descriptor);
//   console.log(
//     "typeof descriptor from accessor decorator = ",
//     typeof descriptor
//   );
// }

// //difine a method accessor
// function Logger3(
//   target: any,
//   name: string | symbol,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("Method decorator is called . . . ");
//   console.log("target from method decorator = ", target);
//   console.log("type of method decorator target = ", typeof target);
//   console.log("name from method decorator = ", name);
//   console.log("descriptor from method decorator = ", descriptor);
// }

// //define a parameter decorator
// function Logger4(target: any, name: string | symbol, position: number) {
//   console.log("Parameter decorator is called . . . ");
//   console.log("target from parameter decorator = ", target);
//   console.log("type of parameter decorator target = ", typeof target);
//   console.log("name from parameter decorator = ", name);
//   console.log("descriptor from parameter decorator = ", position);
// }

// class Product {
//   @Logger
//   title: string;
//   private _price: number;

//   constructor(p: number) {
//     this._price = p;
//     this.title = "bb";
//   }

//   @Logger2
//   set price(v: number) {
//     if (v > 0) {
//       this._price = v;
//     }
//     throw new Error("");
//   }

//   @Logger3
//   getPriceWithTax(@Logger4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }
