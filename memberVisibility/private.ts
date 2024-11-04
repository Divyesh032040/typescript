// Private:

// The private modifier restricts access to the class where it is declared.

// A private property or method cannot be accessed from outside the class or by any subclasses.

// This is useful when you want to hide internal details of a class.

class Animal {
    private type: string;

    constructor(type: string) {
        this.type = type;
    }

    private makeSecretSound(): void {
        console.log("Whispering...");
    }
}

const cat = new Animal("Cat");
// console.log(cat.type); // Error: Property 'type' is private and only accessible within class 'Animal'
// cat.makeSecretSound();  // Error: Method 'makeSecretSound' is private and only accessible within class 'Animal'



export {}