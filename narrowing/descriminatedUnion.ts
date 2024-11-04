interface circle {
    kind:"circle",
    radius: number
}

interface square {
    kind:"square",
    side: number
}

interface rectangle {
    kind:"rectangle",
    length:number,
    width: number
}

type shape = circle | square | rectangle
function getTrueShape (shape: shape){
    if((shape.kind === "circle")){
        return Math.PI * shape.radius ** 2 ;
    }
    //return shape.side * shape.side;
}


//using switch 
function getArea (shape: shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2 ;

        case "square":
            return shape.side * shape.side;

        case "rectangle":
            return shape.length * shape.width;

        default:    //this is checker , it will never run 
            const defaultForShape: never = shape
            return defaultForShape
    }
}