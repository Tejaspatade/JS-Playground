"use strict";

// --------------Functions----------------
const bookings = [];
// Default Parameters ES6
const bookTicket = function (
    flightNum,
    passengers = 1,
    price = 199 * passengers
) {
    const booking = {
        flightNum,
        passengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

bookTicket("B696", 2);

// First-Order VS Higher Order Functions
const merge = function (str) {
    return str.replace(/ /g, "").toLowerCase();
};

const wordToUpper = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
};
// Higher Order
// Function calling another func
const transformer = function (str, func) {
    console.log(func.name);
    return func(str);
};

console.log(transformer("JavaScript is best Language Ever!!", merge));
// Function returning another func
function greet(greeting) {
    return function (name) {
        console.log(`${greeting}, ${name}`);
    };
}
greet("Namaste")("Ramu");
greet("Hallo")("Vater");

const greet1 = (greeting) => (name) => console.log(`${greeting}, ${name}!!`);

//
const lufthansa = {
    name: "Lufthansa",
    code: "LH",
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked flight on ${this.name} ${this.code}${flightNum}`
        );
        this.bookings.push({ flight: `${this.code}${flightNum}`, name });
    },
};
lufthansa.book(345, "Tejas");
