// UNION TYPE : The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

//TypeAliases : We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

//type alias is kind of making our own data type and write it as type in typescript

//for example if we have a function which take a user details as object and return a user object than wee can do like this

type User = {
    name : string ;
    age : number ;
    email : string
}

function createUser (user:User):User {
    return {
        name:user.name,
        age:user.age,
        email:user.email
    }
}


//You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type:
type Id = string | number




type Point = {
    x: number;
    y: number;
};

  // Exactly the same as the earlier example
function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

export {}