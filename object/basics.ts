//define object with there members types

//The type part of each property is also optional. If you don’t specify a type, it will be assumed to be any.
const user:{name:string , age:number , email:string} = {
    name : "divyesh",
    age:21,
    email:"divyeshparmar607@gmail.com"
}

//Optional Properties
//Object types can also specify that some or all of their properties are optional. To do this, add a ? after the property "last:"
//optional property will be or given type or undefined type of not provided. 
function printName(obj: { first: string; last?: string }) {
    // ...
}
  // Both OK
    printName({ first: "Bob" });
    printName({ first: "divyesh", last: "parmar" });

//function which return a object will can be write like this "function ():{} {}" -> her first :{} will define type of member of object which we will return in this function.

function User ():{name:string,age:number,email:string}{
    const myUser = {
        name : "divyesh",
        age : 21,
        email : "dp032040@gmail.com"
    }
    return myUser;
}

//interface of object
//When defining complex or reusable object types, it’s common to use interfaces. An interface is a blueprint for an object’s shape, making it reusable.
interface Person {
    name:string,
    age:number,
    email:string
}

const UserOne : Person = {
    name : "divyesh" ,
    age:21,
    email:"dp032040@gmail.com"
}




User()

