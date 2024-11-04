//In TypeScript, access modifiers control the visibility of class properties and methods, determining how they can be accessed from outside the class. 

//public

//The public modifier makes a class property or method accessible from anywhere.
//If no access modifier is specified, it is considered public by default.

class Animal {
    public name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    public makeSound(): void {
        console.log("Some sound");
    }
}

const dog = new Animal("Dog");
console.log(dog.name); // Accessible because it's public
dog.makeSound();       // Accessible because it's public




//we can also write like this 
class AnimalOne {
    // Declaring variables with access modifiers directly
    public name: string;
    private type: string;
    protected sound: string;

    constructor(name: string, type: string, sound: string) {
        this.name = name;
        this.type = type;
        this.sound = sound;
    }

    public functionOne(val:string):void{
        console.log("functionOne called")
    }
}

const newAnimal = new AnimalOne("cow","male","loud");

console.log(newAnimal.name)



export {}