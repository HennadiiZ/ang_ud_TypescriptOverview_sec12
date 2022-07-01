// 358. Annotations and Variables
const apples: number = 5;
let speed: string = "fast";
let hasName: boolean = false;

let nothing: null = null;
let nthng: undefined = undefined;

// built in objects
let now: Date = new Date();

// 359. Object Literal Annotations
//Array 
let colors: string[] = ['red', 'green', 'blue',]; // arr of strings
let colorsMore: Array<string> = ['red', 'green', 'blue',];

let numbers: number[] = [1, 4]; // arr of numbers
let numbersMore: Array<number> = [1, 4];

let truths: boolean[] = [ true, false];
let truthsMore: Array<boolean> = [ true, false];

// Classes
class Car {

}
let car: Car = new Car();

//Object literal 
let point: { x: number; y: number } = { x: 0, y: 0 };
let pointStr: { x: string; y: string  } = { x: "hey", y: "hoy" };

// 360. Annotations Around Functions
// Function
const logNumber = (i: number) => { // js
    console.log(i);
};

const logNumberMore: (i: number) => void = (i: number) => { // ts
    console.log(i);
};