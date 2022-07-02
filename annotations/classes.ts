// 386. Classes

class Vehicle {
    drive(): void  {
      console.log('hey');
    }

    honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();


// 387. Basic Inheritance
class Vehicle2 {
    drive(): void  {
      console.log('hey');
    }

    honk(): void {
        console.log('beep');
    }
}

const vehicle2 = new Vehicle();
vehicle2.drive();
vehicle2.honk();

class Car extends Vehicle2 {
    drive(): void  {
        console.log('vroom');
    }
}
const car = new Car();
car.drive();
car.honk();