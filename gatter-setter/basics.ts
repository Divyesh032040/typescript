class User {
    readonly city: string = "rajkot";

    constructor(public email: string, public name: string) {}

    private _courseCount = 1;

    // Getter function
    public get getCourseCount(): number {
        return this._courseCount;
    }

    // Setter function with validation (optional)
    public set setCourseCount(num: number) {
        if (num <= 0) {
            throw new Error("Course count must be greater than 0");
        }
        this._courseCount = num;
    }
}

const userOne = new User("dp032040@gmail.com", "divyesh");

// Using the setter function to set the course count
userOne.setCourseCount = 5;  // Sets the course count to 5

// Using the getter function to get the course count
console.log(userOne.getCourseCount);  // Output: 5

export {};


//we create a getter and setter values for private members so that er can access it and modify not directly but via getter and setter functions 

//REMEMBER : setter function not allow to write any type in return so we can not write any return type : void or something so it should be empty.