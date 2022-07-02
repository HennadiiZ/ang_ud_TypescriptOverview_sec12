const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

const pepsi = ['brown', true, 40]; 
const cola: [string, boolean, number] = ['brown', true, 40]; 


//Type alias
type Drink = [string, boolean, number]; //tuple

const fanta: Drink = ['orange', true, 40]; 
const sprite: Drink = ['transparent', true, 40]; 
const tea: Drink = ['green', false, 0]; 

// 378. Why Tuples?