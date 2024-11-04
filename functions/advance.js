"use strict";
//rest parameters in function
//a rest parameter must be of an array type
Object.defineProperty(exports, "__esModule", { value: true });
function addNumbers() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (total, sum) { return total + sum; }, 0);
}
console.log(addNumbers(10, 20, 30, 40)); // Output: 100
//if function is not return anything , its good practice to write still :void in return type 
function consoleMessage(errorMessage) {
    console.log(consoleMessage);
}
//function with more than one return type 
function getValue(val) {
    if (val > 5) {
        return true;
    }
    return "ok 200";
}
//some function will be never return any value so use "never" keyword in that place.
function getMyError(msg) {
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
var names = ["Alice", "Bob", "Eve"];
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
