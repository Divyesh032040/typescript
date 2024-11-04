//An interface declaration is another way to name an object type:

interface user  {
    readonly _id: number
    name: string,
    age: number,
    isLogin: boolean,
    dummyFunction: ()=>string,    //this define it should be function which return string type 
    creditNumber?: number
}

//we can also rewrite a new fields of interface on existing interface in same or different file
//its also called "re-opening of interface"
interface user {
    gitId : string ,
    authenticate : boolean
}


// now we can define any user according to this user interface where this interface work as blueprint for create a user 

const userOne: user = {
    _id: 210200111006,
    name: "divyesh parmar",
    age: 21,
    isLogin: true,
    dummyFunction: ()=> { return "this is my return type string" },     
    creditNumber : 23433652375,
    gitId : "www.github.com/Divyesh032040",
    authenticate: true

}


//we can also inherit interface like this
interface admin extends user {
    adminLogin : true,
    role: "admin" | "ta" | "tester" | "developer"
}



//interface vs types 
// Certainly! Here’s a concise version:

// 1. Object Shapes: Interfaces are mainly for object shapes; type aliases can represent any type, including unions and intersections.

// 2. Extendability: Interfaces use `extends` for inheritance, while type aliases use intersections (`&`) to combine types.

// 3. Declaration Merging: Interfaces support merging across multiple declarations; type aliases do not.

// 4. Usage Flexibility: Type aliases are more flexible for complex types, whereas interfaces are better for structured, evolving shapes.

// 5. Error Feedback: Type aliases give more specific error messages in complex types; interfaces may provide simpler feedback.




export {}