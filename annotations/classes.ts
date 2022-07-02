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
    // drive(): void  {
    //   console.log('hey');
    // }

    protected honk(): void {
        console.log('beep');
    }

    // private honk(): void {
    //     console.log('beep');
    // }
}

const vehicle2 = new Vehicle();
vehicle2.drive();
vehicle2.honk();

class Car extends Vehicle2 {
    private drive(): void  {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk(); // cannot use if private. protected can use.
    }
}
const car = new Car();
//car.drive(); // error if private
car.startDrivingProcess() // ok
//car.honk(); // error if private or protected

// 388. Class Method Modifiers (public, private, protected)