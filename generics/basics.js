function identity(value) {
    return value;
}
var number = identity(42); // T is number
var text = identity("hello"); // T is inferred as string
var score = [10, 20, 30];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityTree(val) {
    return val; //return T type : which may be string or number or boolean 
}
console.log(typeof (identityTree("10")));
