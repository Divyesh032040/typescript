// The protected modifier allows access to properties and methods from within the class and its subclasses.

// Unlike private, a protected member can be inherited and used in derived classes but cannot be accessed outside of the class hierarchy.

// This is useful for creating members intended to be used by subclasses but not exposed publicly.

class Animal {
    protected sound: string;

    constructor(sound: string) {
        this.sound = sound;
    }
}

class Dog extends Animal {
    public makeSound(): void {
        console.log(this.sound); // Accessible in subclass
    }
}

const dog = new Dog("Woof");
dog.makeSound(); // Woof


// console.log(dog.sound); // Error: Property 'sound' is protected and only accessible within class 'Animal' and its subclasses

//protected : we can access in only class who inherit base class where protected member there 


export {}