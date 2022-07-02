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
    color: string = 'red';
    // drive(): void  {
    //   console.log('hey');
    // }
    constructor( color: string ) {
      this.color = color;
    }

    protected honk(): void {
        console.log('beep');
    }

    // private honk(): void {
    //     console.log('beep');
    // }
}

const vehicle2 = new Vehicle2('orange');
// vehicle2.drive();
// vehicle2.honk();

class Car extends Vehicle2 {
    private drive(): void  {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk(); // cannot use if private. protected can use.
    }
}
const car = new Car('black');
//car.drive(); // error if private
car.startDrivingProcess() // ok
//car.honk(); // error if private or protected

// 388. Class Method Modifiers (public, private, protected)
// 389. Fields in Classes

class Vehicle3 {

    color: string = 'red';

    constructor( color: string ) {
      this.color = color;
    }

    protected honk(): void {
        console.log('beep');
    }
}

class Vehicle4 {
    constructor( public color: string ) {
    }

    protected honk(): void {
        console.log('beep');
    }
}