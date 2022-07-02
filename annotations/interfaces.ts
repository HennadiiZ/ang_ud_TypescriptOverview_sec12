// 379+380 Interfaces + Long Type Annotations
const oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true
};

const printVehecle = (vehicle: {name: string, year: number, broken: boolean}): void => {
    console.log(vehicle);
}
printVehecle(oldCivic);

// 381. Fixing Annotations With Interfaces

interface carInfo {
    name: string, 
    year: number, 
    broken: boolean
}

const printVehecleMore = (vehicle: carInfo): void => {
    console.log(vehicle);
}
printVehecleMore(oldCivic);
