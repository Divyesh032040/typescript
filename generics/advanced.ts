// generics in array

function getArray <Type>(arg: Type[]): Type[]{
    console.log(arg.length)
    return arg
}

const products: Array<string> = ["product1" , "product2" , "product3" , "product4"];

// function getSearchProduct<T>(products: Array<T>) {}    //we can also write like this

function getSearchProduct<T>(products: T[]): T {     //<T> : indicate that this will be generics
    const myIndex = 3;
    return products[myIndex];                                 //we have to write like this in typescript
}

//let write this same function in arrow function 

const getMyProduct  = <T> (products: T[]): T => {
    //do some db operations
    const index = 4;
    return products[index];
}

//we can also define generics like this : <T,> which indicate this is not jsx or any tag but it is generics

const myArrowFunction = <T,>(products: T[]): T => {      //we can also define generics like this : <T,>
    return products[1];
}


//classes in generics 


function anotherFunction <T> (valOne: T): object{
    return {}
}

//we can also write many types like this 
function againAnotherFunction <T,U,V> (valOne: T , valTwo:U , valThree:V): object{
    return {
        valOne,
        valTwo,
        valThree
    }
}

//we can also write types generic by define specific interface of type 
interface database {
    connection: string,
    clusterNumber: number,
    isConnected: boolean
}

function databaseConnection <T , U extends database> (valOne: T , valTwo:U):object{
    return {valOne}
}

console.log(databaseConnection(10 ,{ connection: "string", clusterNumber: 23,  isConnected: true }));


//generics in class

class salable <T> {

    private card: T[] = [];

    addToCart (products: T){
        this.card.push(products)
    }

}

//another example

class Box<T> {
    // A generic field
    private value: T;

    constructor (newValue: T){
        this.value = newValue
    }

    // Getter method
    get getValue(): T {
        return this.value;
    }

    // Setter method
    set setValue(newValue: T) {
        this.value = newValue;
    }

}

const intBox = new Box<number>(123);
console.log(intBox.getValue);


//another example 

// Define a generic class with two type parameters, T and U
class Pair<T, U> {
    private first: T;
    private second: U;

    // Constructor
    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }

    // Getters
    getFirst(): T {
        return this.first;
    }

    getSecond(): U {
        return this.second;
    }
}

// Using the generic Pair class
const nameAgePair = new Pair<string, number>("Alice", 25);
console.log("Name:", nameAgePair.getFirst(), "Age:", nameAgePair.getSecond());

const coordinate = new Pair<number, string>(10.5, "North");
console.log("Latitude:", coordinate.getFirst(), "Direction:", coordinate.getSecond());
