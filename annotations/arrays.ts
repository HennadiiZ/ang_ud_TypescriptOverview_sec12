// 372. Arrays in TypeScript

const carMakers = [ 'ford', 'toyota', 'chevy'];
const dates = [ new Date(), new Date() ];




// const carsByMake  = [
//     ['f150'], 
//     ['corolla'],
//     ['camaro']
// ];

// const carsByMake: string[][] = [];

const carsByMake: string[][]  = [
    ['f150'], 
    ['corolla'],
    ['camaro']
];

// 373. Why Typed Arrays?
//help with inference when extracting values 
const car = carMakers[0];
const myCar = carMakers.pop(); 

// prevent incompatible values 
//carMakers.push(100); // mistake

carMakers.map((car: string) => {

});