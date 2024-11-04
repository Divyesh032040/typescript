function identity<T>(value: T): T {
    return value;
}

const number = identity<number>(42); // T is number
const text = identity<string>("hello"); // T is inferred as string


const score: Array<number> = [10,20,30];

function identityOne(val: boolean | number | string ):boolean | string | number{
    return val;
}

function identityTwo(val: any): any{
    return val;
}

function identityTree<T>(val: T): T{
    return val;   //return T type : which may be string or number or boolean 
}
console.log(typeof(identityTree(10)));  //number 
console.log(typeof(identityTree("10")));  //string

interface user  {
    name:string,
    age:number,
    isLogin: boolean
}

identityTree<user>({name:"divyesh",age:21,isLogin:true})


export{}
