"use strict";
//TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. Now that we know how to write a few types, it’s time to start combining them in interesting ways.
Object.defineProperty(exports, "__esModule", { value: true });
//some time we cant sure what type will be there btw 2-3. we can combine more than one type like this...
var score = 33;
score = 43;
score = "53";
//this is how we can write multiple return type.
function unionFunction(num) {
    if (num > 5) {
        return 100;
    }
    return "100";
}
var userOne = { name: "divyesh", id: 210200111006 };
var userTwo = { userName: "soham", id: 210200111091 };
function DataBaseId(id) {
    if (typeof id === "string") { //her id may be number or string 
        id.toLowerCase(); //at this line id will de string type for sure TS knows that 
    }
}
//union in array 
//using union we can mix number and string in same array 
var array1 = ["1", "2", "3", "4", "5", "6"];
var array2 = [10, 20, 30, 40, 50, 60];
var array3 = [10, 20, 30, 40, "50", "60", "70", true, false];
console.log(array1);
console.log(array2);
console.log(array3);
//we can also directly assign a strict value as well 
var pi = 3.14;
console.log(pi);
