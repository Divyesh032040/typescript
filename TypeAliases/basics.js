// UNION TYPE : The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
function createUser(user) {
    return {
        name: user.name,
        age: user.age,
        email: user.email
    };
}
console.log(createUser({ name: "divyesh", age: 21, email: "dp032040@gmail.com" }));

