// In TypeScript, narrowing refers to the process of refining the type of a variable to a more specific type based on certain checks or conditions. This is essential for handling union types (types that could be one of several possible types) and making your code more predictable and safer.

//example one

function printLength(value: string | number) {
    if (typeof value === "string") {
        // Inside this block, TypeScript knows `value` is a string
        console.log("String length:", value.length);
    } else {
        // Inside this block, TypeScript knows `value` is a number
        console.log("Number value:", value);
    }
}

//example two
function provideId (id: string | null){
    if(!id){
        console.log("provide id");
        return;
    }
    return id.toLocaleLowerCase()
}


//example three
function printAll(sars: string | string[] | null) {
 
    if (sars) {
      if (typeof sars === "object") {
        for (const s of sars) {
          console.log(s);
        }
      } else if (typeof sars === "string") {
        console.log(sars);
      }
    }
  }