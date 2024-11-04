function greeting (name: string) :string{
    return `hello , ${name}`
}

//arrow function : in js file , let type will becomes var addNumber 
let addNumber = (inputNumber : number):number => {
    return inputNumber + 10 ;
}

let returnValueString = greeting("Divyesh");
let returnValueNumber = addNumber(20);
console.log("number type: ",returnValueNumber , "string type ",returnValueString);


//we can define type in function in parameter and in return type
//her pedometer accepting string value , so if we try to pass number value , is show error "Argument if type 'number' is not assignable to parameter of type 'string'.
//When a parameter has a type annotation, arguments to that function will be checked:



//we can also assign type to multiple parameters 

function addInput (val1:number , val2:number , val3:number , val4:string):string{
    let returnVal = val1+val2+val3+val4;
    return returnVal;
}

console.log(addInput(10,20,30,"40"));  //6040


//we can also pass default value in function than we don't need to pass parameter for that default parameter.
function signUp (name:string , email:string , isPaid:boolean = false){
    console.log(name , email , isPaid);
}

signUp("divyesh","dp032040@gmail.com"); //not pass 3rd parameter.    
//it will return : divyesh dp032040@gmail.com false



//practice
function upperCase (str :string ):string {
    let upperCase = str.toLocaleUpperCase();
    return upperCase;
}

let returnUpperCase = upperCase("typescript provide us type safety and prevent from unexpected type errors");
console.log(returnUpperCase);

export{}

