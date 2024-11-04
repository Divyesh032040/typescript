// generics in array
function getArray(arg) {
    console.log(arg.length);
    return arg;
}
var products = ["product1", "product2", "product3", "product4"];
// function getSearchProduct<T>(products: Array<T>) {}    //we can also write like this
function getSearchProduct(products) {
    var myIndex = 3;
    return products[myIndex]; //we have to write like this in typescript
}
//let write this same function in arrow function 
var getMyProduct = function (products) {
    //do some db operations
    var index = 4;
    return products[index];
};
//we can also define generics like this : <T,> which indicate this is not jsx or any tag but it is generics
var myArrowFunction = function (products) {
    return products[1];
};
//classes in generics 
function anotherFunction(valOne) {
    return {};
}
//we can also write many types like this 
function againAnotherFunction(valOne, valTwo, valThree) {
    return {
        valOne: valOne,
        valTwo: valTwo,
        valThree: valThree
    };
}
function databaseConnection(valOne, valTwo) {
    return { valOne: valOne };
}
console.log(databaseConnection(10, { connection: "string", clusterNumber: 1212, isConnected: true }));
