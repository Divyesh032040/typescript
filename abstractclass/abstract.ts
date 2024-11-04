// It serves as a blueprint for other classes. 
//Abstract classes can define methods and properties that derived classes must implement, as well as contain other concrete methods and properties.

// Defining an Abstract Class: Use the abstract keyword.
// Abstract Methods: Defined without implementation; subclasses must implement them.
// Concrete Methods: Defined with an implementation; subclasses can use them as-is or override.


abstract class Animal {
    // Abstract property (optional)
    abstract species: string;

    // Abstract method - must be implemented by subclasses
    abstract makeSound(): void;

    // Concrete method - can be used directly or overridden in subclasses
    move(): void {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    species = "Dog";

    makeSound(): void {
        console.log("Bark!");
    }
}

class Cat extends Animal {
    species = "Cat";

    makeSound(): void {
        console.log("Meow!");
    }
}

// Usage
const myDog = new Dog();
myDog.makeSound(); // Output: Bark!
myDog.move();      // Output: Moving...

const myCat = new Cat();
myCat.makeSound(); // Output: Meow!
myCat.move();      // Output: Moving...
