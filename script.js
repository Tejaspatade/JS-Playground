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

// Call & Apply methods
const lufthansa = {
    name: "Lufthansa",
    code: "LH",
    bookings: [],
    book(flightNum, username) {
        console.log(
            `${username} booked flight on ${this.name} ${this.code}${flightNum}`
        );
        this.bookings.push({ flight: `${this.code}${flightNum}`, username });
    },
};
lufthansa.book(345, "Tejas");

const euroair = {
    name: "EuroAir",
    code: "EA",
    bookings: [],
};
// Globalising book method
const book = lufthansa.book;
// Doesnt Work
// book(23, "Anna");
book.call(euroair, 23, "Anna");

console.log(lufthansa);
console.log(euroair);

// bind()
const bookEA = book.bind(euroair);
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    this.planes++;
    console.log(this);
};
//  Event listener
document
    .querySelector(".buy")
    .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
// Partial Application
const addTax = (tax, income) => income + income * tax;
console.log(addTax(0.3, 1000000));
const addVAT = addTax.bind(null, 0.33);

// CC #1
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const ans = Number(
            prompt(
                `${this.question} \n${this.options.join(
                    "\n"
                )} \n(Write Option Number)`
            )
        );

        typeof ans === "number" &&
            ans < this.answers.length &&
            this.answers[ans]++;
        this.displayResults();
        this.displayResults("string");
    },
    displayResults(type = "array") {
        if (type === "array") {
            console.log(this.answers);
        } else if (type === "string") {
            console.log(`Poll results are ${this.answers.join(", ")}`);
        }
    },
};
document
    .querySelector(".poll")
    .addEventListener("click", poll.registerNewAnswer.bind(poll));
