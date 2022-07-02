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
    name: string;
    year: number;
    broken: boolean;
}

const printVehecleMore = (vehicle: carInfo): void => {
    console.log(vehicle);
}
printVehecleMore(oldCivic);



// 382. Syntax Around Interfaces

const oldCadilac = {
    name: 'Cadilac',
    year: 2000,
    broken: true,
    summary(): string {
      return this.name;
    }
};
interface carInfoSum {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

const printVehecleMoreMore = (vehicle: carInfoSum): void => {
    console.log(vehicle);
}
printVehecleMoreMore(oldCadilac);



// 383. Functions in Interfaces
interface Reportable {
    summary(): string;
}

const cadilac = {
    name: 'Cadilac',
    year: 2000,
    broken: true,
    summary(): string {
      return this.name;
    }
};

const vehecle = (vehicle: Reportable): void => {
    console.log(vehicle.summary());
}
vehecle(cadilac);

// 384. Code Reuse with Interfaces
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary() {
        return this.sugar;
    }
}

const thirsty = (drink: Reportable): void => {
    console.log(drink.summary());
}
thirsty(drink);