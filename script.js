"use strict";

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
