class Dog {
    bark() { console.log("Woof!"); }
}

class Cat {
    meow() { console.log("Meow!"); }
}

function makeNoise(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        // `animal` is narrowed to Dog, so `bark()` is accessible
        animal.bark();
    } else {
        // Here `animal` is narrowed to Cat, so `meow()` is accessible
        animal.meow();
    }
}

//another example

type Fish = {swim: ()=> void};
type Bird = {fly: ()=> void};

function isFish (pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined  //this will return true 
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food";
    }else{
        pet
        return "bird food"
    }
}

export{}