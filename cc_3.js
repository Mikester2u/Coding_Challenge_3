//U22562170

class Car { //Car class with accelerate and brake functions
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

accelerate() {
    this.speed += 10;
    console.log(this.make + " is going at " + this.speed + " km/h");
    }

brake () {
    this.speed -= 5;
    console.log(this.make + " is going at " + this.speed + " km/h");
    }

}

module.exports = Car;

const car1 = new Car("BMW", 120); //test data 1
const car2 = new Car("Mercedes", 95); //test data 2

//car 1
car1.accelerate();
car1.brake();
car1.accelerate();
car1.brake();

//car 2
car2.accelerate();
car2.brake();
car2.accelerate();
car2.brake();