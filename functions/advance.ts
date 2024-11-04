//rest parameters in function
//a rest parameter must be of an array type

function addNumbers(...num: number[]): number {
    return num.reduce((total, sum) => total + sum, 0);
}
console.log(addNumbers(10, 20, 30, 40)); // Output: 100

//if function is not return anything , its good practice to write still :void in return type 

function consoleMessage (errorMessage:string): void{
    console.log(consoleMessage)
}


//function with more than one return type  - union type
function getValue (val :number): boolean | string{
    if (val>5){
        return true;
    }
    return "ok 200";
}


//some function will be never return any value so use "never" keyword in that place.
function getMyError(msg:string):never {
    throw new Error(msg);
}

//If you want to annotate the return type of a function which returns a promise, you should use the Promise type:
// async function getFavoriteNumber(): Promise<number> {
//     // Simulating an asynchronous operation
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(42); // Example favorite number
//         }, 1000);
//     });
// }



//Anonymous functions are a little bit different from function declarations. When a function appears in a place whereTypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});




export {}


