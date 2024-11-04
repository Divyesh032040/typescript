//Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

//now i want to create a user object which will create a user into mongodb database and i want that no one can change a _id if user than we can make it readonly so that it will be read only and never be reassigned.

type User = {
    readonly _id : number
    name : string ;
    age : number ,
    email : string,
    creditCardDetails? : number
}

const userOne :User = {
    _id : 213,
    name:"divyesh",
    age:21,
    email:"dp032@gmail.com",
    
}

// userOne._id = 54    i cant do like this ....
//? can be applied if we want to make that property optional for available


//we can also do make a typeAliases by combining objects like this..

type cardNumber = {
    cardNumber : number
}
type cardDate = {
    cardDate : string
}


type cardDetails = cardNumber & cardDate & {cvvNumber : number} 

//and we can write object like this 
const myCard :cardDetails = {
    cardNumber : 232323,
    cardDate : "23/12/2024",
    cvvNumber : 431
}

