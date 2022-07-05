"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(logString) {
    console.log("from Log decorator factory");
    return function (constructor) {
        console.log("from Log decorator ........");
        console.log("logString = ", logString);
        console.log("constructor = ", constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log("from WithTemplate decorator factory");
    return function (constructor) {
        console.log("from WithTamplate decorator ........");
        const p = new constructor();
        const hookElement = document.getElementById(hookId);
        if (hookElement) {
            hookElement.innerHTML = template;
            hookElement.querySelector("h1").textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Rose";
        console.log("Create a person object...");
    }
};
Person = __decorate([
    Log("LOGIN - PERSON"),
    WithTemplate("<h1>This is from WithTemplate </h1>", "apple")
], Person);
//# sourceMappingURL=app.js.map