"use strict";
//In TypeScript, access modifiers control the visibility of class properties and methods, determining how they can be accessed from outside the class. 
Object.defineProperty(exports, "__esModule", { value: true });
//public
//The public modifier makes a class property or method accessible from anywhere.
//If no access modifier is specified, it is considered public by default.
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("Some sound");
    };
    return Animal;
}());
var dog = new Animal("Dog");
console.log(dog.name); // Accessible because it's public
dog.makeSound(); // Accessible because it's public
//we can also write like this 
var AnimalOne = /** @class */ (function () {
    function AnimalOne(name, type, sound) {
        this.name = name;
        this.type = type;
        this.sound = sound;
    }
    AnimalOne.prototype.functionOne = function (val) {
        console.log("functionOne called");
    };
    return AnimalOne;
}());
var newAnimal = new AnimalOne("cow", "male", "loud");
console.log(newAnimal.name);
