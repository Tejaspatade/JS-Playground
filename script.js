"use strict";
/*
// Constructor
function Constructor(firstName, birthYr) {
    // Instance Properties
    this.firstName = firstName;
    this.birthYr = birthYr;
}

// Constructor("Simple", 21);
const obj = new Constructor("Tejas", 2002);
// 1. New {} object is created
// 2. Constructor() is called ad this -> {}
// 3. {} is linked to Constructor.prototype
// 4. {} is returned implicitly
console.log(obj);

// Prototypal Inheritance
console.log(Constructor.prototype);
Constructor.prototype.calcAge = function () {
    return 2022 - this.birthYr;
};

console.log(obj.calcAge());
console.log(obj.__proto__);
console.log(obj.__proto__ === Constructor.prototype);
console.log(Constructor.prototype.isPrototypeOf(obj));
console.log(Constructor.prototype.isPrototypeOf(Constructor));

Constructor.prototype.species = "Homo Sapiens";
console.log(obj.species);
console.log(obj.hasOwnProperty("species"));

// CC#1
// 1.
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

// 2.
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is Running at ${this.speed} km/hr.`);
};

// 3.
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is Running at ${this.speed} km/hr.`);
};

// 4.
const mybmw = new Car("BMW", 100);
const mercedes = new Car("Mercedes", 69);
mybmw.accelerate();
mybmw.brake();
mybmw.accelerate();

mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();
*/

// ES6 Classes
class Person {
    // Constructor invoked when new obj is instantiated
    constructor(fullname, birthYr) {
        // Setter invoked for fullName
        this.fullName = fullname;
        this.birthYr = birthYr;
    }
    // Instance Methods
    calcAge() {
        console.log(2022 - this.birthYr);
    }
    // Gettter
    get age() {
        return 2022 - this.birthYr;
    }
    // Setter
    set fullName(name) {
        if (name.includes(" ")) this._fullName = name;
        else alert(`${name} is an invalid Name.`);
    }
    // Getter
    get fullName() {
        return this._fullName;
    }
}

const tejas = new Person("Tejas Patade", 2002);
tejas.calcAge();
console.log(tejas.age);
