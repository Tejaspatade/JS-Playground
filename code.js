// for loop
// for (let i = 1; i <= 5; ++i) console.log("Hello World", i);

// while loop
// let i = 0;
// while (i <= 10) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

// do...while loops
// let i = 0;
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }while (i <= 5)

// for...in
// let person = {
//     name:'Tejas',
//     age:19
// };
// for (let key in person) {
//     console.log(key, person[key]);
// }

// FizzBuzz
// function FizzBuzz (input) {
//     if (typeof input !== 'number') {
//         console.log('Not A Number');
//         return;
//     }
//     if (input % 3 === 0) {
//         if (input % 5 === 0) {
//             console.log('FizzBuzz');
//         }
//         else {
//             console.log('Fizz');
//         }
//     }
//     else if (input % 5 === 0) {
//         console.log('Buzz');
//     }
//     else {
//         console.log(input);
//     }
// }
// FizzBuzz('13');

// speed limit challenge
// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;
//   const pointLimit = 12;

//   if (speed < speedLimit + kmPerPoint) {
//     console.log("Ok.");
//     return;
//   }
//   const points = Math.floor((speed - speedLimit) / kmPerPoint);
//   if (points > pointLimit) console.log("License Suspended.");
//   else console.log("Points:", points);
// }
// checkSpeed(70);

// odd even
// function showNumbers(limit) {
//   for (var i = 0; i <= limit; i++) {
//     var message = i % 2 ? "ODD" : "EVEN";
//     console.log(i, message);
//   }
//   return;
// }
// showNumbers(10);

// function countTruthy(array) {
//     var counter = 0;
//     for (var iterator of array) if (iterator) counter++;

//     return counter;
//   }

// function showProperties(obj) {
//   for (var key in obj) {
//     if (typeof obj[key] === "string") console.log(key, obj[key]);
//   }
// }

// OOP object
// const circle = {
//   radius: 9,
//   location: {
//     x: 1,
//     y: 8,
//   },
//   draw: function () {
//     console.log("deaw");
//   },
// };

"use strict";
// Factory Functions
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("Draw.");
//     },
//   };
// }

// const circle = createCircle(4);
// console.log(circle);

// let vary = "Hello";
// console.log(typeof vary);

// let markHeight = 1.69;
// let markMass = 78;
// let markBMI = markMass / markHeight ** 2;

// let johnHeight = 1.95;
// let johnMass = 92;
// let johnBMI = johnMass / johnHeight ** 2;

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI, johnBMI, markBMI);

// let dolphinScore1 = 96;
// let dolphinScore2 = 108;
// let dolphinScore3 = 89;

// let koalaScore1 = 88;
// let koalaScore2 = 91;
// let koalaScore3 = 110;

// let dolphinsAvg = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
// let koalasAvg = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
// console.log(dolphinsAvg, koalasAvg);

// if (dolphinsAvg === koalasAvg) {
//   console.log("It's a Tie!!");
// } else if (dolphinsAvg > koalasAvg) {
//   console.log("The Dolphins WIN!!");
// } else {
//   console.log("The Koalas WIN!!");
// }

// let dolphinScore1 = 97;
// let dolphinScore2 = 112;
// let dolphinScore3 = 101;

// let koalaScore1 = 109;
// let koalaScore2 = 95;
// let koalaScore3 = 123;

// let dolphinsAvg = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
// let koalasAvg = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
// console.log(dolphinsAvg, koalasAvg);

// if (dolphinsAvg === koalasAvg) {
//   console.log("It's a Tie!!");
// } else if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
//   console.log("The Dolphins WIN!!");
// } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
//   console.log("The Koalas WIN!!");
// }

// // CC4
// let bill = 430;
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip} and the total value is ${
//     bill + tip
//   }`
// );

// Functions
// Function Definition
// function calcAge(birthYear) {
//   return 2022 - birthYear;
// }

// const myAge = calcAge(2002);
// console.log(myAge);

// // Function Expression/Anonymous Function
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const myAge2 = calcAge2(2002);
// console.log(myAge);

// // Arrow Function
// const calcAge3 = (birthYear) => 2022 - birthYear;
// const myAge3 = calcAge3(2002);
// console.log(myAge);

// // Advanced Arrow Function
// const calcRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };
// console.log(calcRetirement(2002, "Tejas Patade"));

// CC1
// const avgScore = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const dolphinsAvg = avgScore(85, 54, 41);
// const koalasAvg = avgScore(23, 34, 27);

// const checkWinner = function (dolphinsAvg, koalasAvg) {
//   if (dolphinsAvg > koalasAvg * 2)
//     console.log(`Dolphins Win (${dolphinsAvg} vs ${koalasAvg})`);
//   else if (koalasAvg > dolphinsAvg * 2)
//     console.log(`Koalas Win (${koalasAvg} vs ${dolphinsAvg})`);
//   else console.log("Nobody Wins. 😔");
// };

// checkWinner(dolphinsAvg, koalasAvg);

// CC2
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, total);

// const tejas = {
//   firstName: "Tejas",
//   lastName: "Patade",
//   birthYear: 2002,
//   friends: ["Deep", "Om", "John"],
//   hasDriversLicense: false,

//   // calcAge: (birthYear) => 2022 - birthYear,
//   calcAge: function () {
//     return 2022 - this.birthYear;
//   },
// };

// CC3
// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   height: 1.69,
//   mass: 78,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   height: 1.95,
//   mass: 92,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//   },
// };
// mark.calcBMI();
// john.calcBMI();
// const larger = mark.BMI > john.BMI ? mark : john;
// const smaller = mark.BMI < john.BMI ? mark : john;
// console.log(
//   `${larger.firstName} ${larger.lastName}'s BMI (${larger.BMI}) is higher than ${smaller.firstName} ${smaller.lastName}'s BMI (${smaller.BMI})`
// );

// // CC4
// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(tips[i] + bills[i]);
// }
// console.log(tips, totals);

// function calcAverage(arr) {
//   let sum = 0.0;
//   for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];
//   }
//   return sum / arr.length;
// }

// console.log(calcAverage(totals));

// Data needed for a later exercise
// String Manipulations
const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const convert = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
    const [status, src, dest, time] = flight.split(";");
    const output = `${
        status.startsWith("_Delayed") ? "🔴" : ""
    }${status.replaceAll("_", " ")} from ${convert(src)} to ${convert(
        dest
    )} (${time})`.padStart(45);
    console.log(output);
}
// //
// const airline = "Lufthansa Airlines";
// const plane = "L404";
// const companyName = airline.slice(0, airline.indexOf(" "));
// console.log(companyName);
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// //
// const middleSeatCheck = function (seat) {
//     // B & E are middle seats
//     const row = seat.slice(-1);
//     // if (seat.indexOf("B") !== -1 || seat.indexOf("E") !== -1)
//     if (row === "B" || row === "E")
//         console.log("You have a middle seat.", seat);
//     else console.log("You don't have a middle seat.", seat);
// };
// middleSeatCheck("12D");
// middleSeatCheck("1A");
// middleSeatCheck("2E");
// middleSeatCheck("9B");
// middleSeatCheck("1C");

// // Split & Join
// function capitalize(string, breakpoint) {
//     const names = string.split(breakpoint);
//     const capitalized = [];
//     for (const name of names) {
//         // capitalized.push(name[0].toUpperCase() + name.slice(1));
//         capitalized.push(name.replace(name[0], name[0].toUpperCase()));
//     }
//     console.log(capitalized.join(" "));
// }

// capitalize("ann smith john jodi", " ");

// // Padding Strings
// const msg = "Please Go To Gate 4";
// console.log(msg.padStart(30, "-").padEnd(35, "+"));
// // Mask Aadhar Card Digits
// const maskAadhar = function (aadhar) {
//     const str = aadhar + "";
//     return str.slice(-4).padStart(str.length, "*");
// };

// console.log(maskAadhar(639170903240));

// Destructuring Arrays
// const openingHours = {
//     thu: {
//         open: 12,
//         close: 22,
//     },
//     fri: {
//         open: 11,
//         close: 23,
//     },
//     sat: {
//         open: 0, // Open 24 hours
//         close: 24,
//     },
// };

// const restaurant = {
//     name: "Classico Italiano",
//     location: "Via Angelo Tavanti 23, Firenze, Italy",
//     categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//     starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//     mainMenu: ["Pizza", "Pasta", "Risotto"],

//     order(entreeIndex, mainIndex) {
//         return [this.starterMenu[entreeIndex], this.mainMenu[mainIndex]];
//     },

//     openingHours, // ES6 Object Literal Syntax update

//     orderPasta(ingredient1, ingredient2, ingredient3) {
//         console.log(
//             `Here's Your Pasta with ${ingredient1}, ${ingredient2} and ${ingredient3}`
//         );
//     },

//     orderPizza(mainIngredient, ...optionalToppings) {
//         console.log(mainIngredient, optionalToppings);
//     },
// };

// // const arr = [1, 3, 7];
// // const [first, second] = arr;
// // console.log(first, second);
// let [primary, secondary] = restaurant.categories;
// console.log(primary, secondary);

// const [entree, mainCourse] = restaurant.order(3, 1);

// // Destructuring Objects
// const { name, openingHours } = restaurant;

// const myArr = [6, 27, 8];
// const newArr = [1, 2, ...myArr];
// console.log(newArr);
// console.log(1, 4, ...myArr);

// // Shallow Copy
// const copy = [...restaurant.categories];
// // Merge 2 arrays
// const merged = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(merged);
// // Use Spread Operator for passing arguments
// const ingredients = [
//     // prompt("Enter Your Pasta Ingredients. Ingredient 1?"),
//     // prompt("Ingredient 2?"),
//     // prompt("Ingredient 3?"),
// ];
// restaurant.orderPasta(...ingredients);

// // Rest Operator
// const [pizza, , risotto, ...otherFood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// restaurant.orderPizza("Pepperoni", "Onion", "Capsicum", "Mushrooms", "Olives");

// Short Circuiting
// returns property value if it exists, else returns 10 as a default value
// const guests = restaurant.guestNums || 10;
// Checks is orderPizza method exists, executes it if it does, else ignores the entire expression due to short cicuiting.
// restaurant.orderPizza && restaurant.orderPizza("Mushrooms", "Feta Cheese");

// // For of loop
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // for (const item of menu.entries()) console.log(item);
// for (const [index, item] of menu.entries())
//     console.log(`${index + 1}: ${item}`);

// Optional Chaining Operator
// console.log(restaurant.openingHours.mon.open) Throws an error since mon doesn't exist
// console.log(restaurant.openingHours.mon?.open); // checks if mon actually exists before trying to access its property

// //
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//     const open = restaurant.openingHours[day]?.open ?? "closed";
//     console.log(`On ${day}, we open at ${open}`);
// }

// // Object.keys(), .values() & .entries()
// console.log(Object.keys(openingHours));
// let str = `We are open on ${Object.keys(openingHours).length} days: `;
// for (const day of Object.keys(openingHours)) {
//     str += `${day}, `;
// }
// console.log(str);
// // .values()
// console.log(Object.values(openingHours));
// console.log(Object.entries(openingHours));
// for (const [day, { open, close }] of Object.entries(openingHours)) {
//     console.log(`On ${day} we open at ${open} & close at ${close}`);
// }

// // Sets
// const orderSet = new Set([
//     "Risotto",
//     "Pasta",
//     "Pizza",
//     "Risotto",
//     "Pizza",
//     "Spaghetti",
// ]);
// console.log(orderSet);
// // Example
// const staff = [
//     "Waiter",
//     "Chef",
//     "Manager",
//     "Waiter",
//     "Waiter",
//     "Chef",
//     "Sous Chef",
// ];
// // Check Unique Job positions
// console.log(new Set(staff).size);
// // Maps
// const restaurantMap = new Map();
// restaurantMap
//     .set("name", "Classico Italiano")
//     .set(1, "Venice, Italy")
//     .set(2, "Paris, France")
//     .set(true, "We are open :)")
//     .set(false, "We are closed :(");
// console.log(restaurantMap.get(true));
// // Object to Map conversion
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
// // Map from array
// const quiz = new Map([
//     ["q", "What's the best Programming Language?"],
//     [1, "Python"],
//     [2, "JavaScript"],
//     [3, ".NET"],
//     ["correct", 2],
//     [true, "Yes!! Correct Answer"],
//     [false, "Oops.. Try Again"],
// ]);

// // Quiz Display
// console.log(quiz.get("q"));
// for (const [key, value] of quiz) {
//     if (typeof key === "number") console.log(`${key}. ${value}`);
// }
// // const Answer = Number(prompt("Your Answer?"));
// console.log(Answer);
// console.log(quiz.get(quiz.get("correct") === Answer));

// -------------------------------------------------
// // CC1
// const game = {
//     team1: "Bayern Munich",
//     team2: "Borrussia Dortmund",
//     players: [
//         [
//             "Neuer",
//             "Pavard",
//             "Martinez",
//             "Alaba",
//             "Davies",
//             "Kimmich",
//             "Goretzka",
//             "Coman",
//             "Muller",
//             "Gnarby",
//             "Lewandowski",
//         ],
//         [
//             "Burki",
//             "Schulz",
//             "Hummels",
//             "Akanji",
//             "Hakimi",
//             "Weigl",
//             "Witsel",
//             "Hazard",
//             "Brandt",
//             "Sancho",
//             "Gotze",
//         ],
//     ],
//     score: "4:0",
//     scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//     date: "Nov 9th, 2037",
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };
// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // 3.
// const allPlayers = [...players1, ...players2];
// // 4.
// const playersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];
// // 5.
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, team2, draw, playersFinal, allPlayers);
// // 6.
// const printGoals = function (...dudes) {
//     for (let i = 0; i < dudes.length; i++) {
//         console.log(dudes[i]);
//     }
//     console.log(dudes.length);
// };
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);
// // 7.
// team1 < team2 && console.log("Bayern Munich has Better odds of winning.");
// team1 > team2 && console.log("Borussia Dortmund has Better odds of winning.");

// CC2
// // 1.
// console.log("Goals Scored:");
// for (const [index, name] of game.scored.entries()) {
//     console.log(`Goal ${index + 1}: ${name}`);
// }

// // 2.
// console.log("Odds Average:");
// let sum = 0;
// for (const odd of Object.values(game.odds)) {
//     sum += odd;
// }
// console.log(`Average of Odds: ${sum / 3}`);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//     const output = game[team] ? `victory ${game[team]}` : "draw";
//     console.log(`Odd of ${output}: ${odd}`);
// }

// // Bonus
// const scorers = {};
// for (const player of game.scored) {
//     scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

// // CC 3
// const gameEvents = new Map([
//     [17, "⚽ GOAL"],
//     [36, "� Substitution"],
//     [47, "⚽ GOAL"],
//     [61, "� Substitution"],
//     [64, "� Yellow card"],
//     [69, "� Red card"],
//     [70, "� Substitution"],
//     [72, "� Substitution"],
//     [76, "⚽ GOAL"],
//     [80, "⚽ GOAL"],
//     [92, "� Yellow card"],
// ]);
// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// console.log(
//     `An event occured, on average, every ${90 / gameEvents.size} minutes.`
// );

// // 4.
// for (const [time, event] of gameEvents) {
//     const half = time <= 45 ? "[FIRST HALF]" : "[SECOND HALF]";
//     console.log(`${half} ${time}: ${event}`);
// }

// // Coding Challenge 4
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));
// // const text = document.querySelector("textarea").value;
// const text = `underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure`;
// const words = text.split("\n");
// // console.log(words.join("\n"));
// const output = [];
// for (const word of words) {
//     let [one, two] = word.trim().toLowerCase().split("_");
//     const camelCase = `${one}${two.replace(two[0], two[0].toUpperCase())}`;
//     output.push(camelCase);
// }
// console.log(output);
// let count = 0;
// for (const word of output) {
//     count++;
//     console.log(`${word.padEnd(20, " ")}${"✅".repeat(count)}`);
// }

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

// IIFE
(function () {
    console.log("This won't run ever again.");
})();

// Closures
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} Passengers.`);
    };
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

// CC #2
(function () {
    const header = document.querySelector("h1");
    header.style.color = "red";
    document.querySelector("body").addEventListener("click", function () {
        header.style.color = "blue";
    });
})();

// Arrays Deep Dive

// const currencies = new Map([
//     ["USD", "United States dollar"],
//     ["EUR", "Euro"],
//     ["GBP", "Pound sterling"],
// ]);

/////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.slice(2));

// let arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());

// const letters = arr.concat(arr2);
// console.log(letters);

// // ForEach
// for (const transaction of movements) {
//     if (transaction > 0) console.log(`${transaction} Deposited`);
//     else console.log(`${Math.abs(transaction)} Withdrawn`);
// }

// movements.forEach(function (transaction, index) {
//     if (transaction > 0) console.log(`${index + 1}: ${transaction} Deposited`);
//     else console.log(`${index + 1}: ${Math.abs(transaction)} Withdrawn`);
// });

// // CC #1
// let julia = [3, 5, 2, 12, 17];
// let kate = [4, 1, 15, 8, 3];

// function checkDogs(dogsJulia, dogsKate) {
//     // 1.
//     const copyJulia = dogsJulia.slice(1, 3);
//     // 2.
//     const dogs = copyJulia.concat(dogsKate);
//     // 3.
//     dogs.forEach(function (dog, i) {
//         dog >= 3
//             ? console.log(
//                   `Dog Number ${i + 1} is an adult and is ${dog} years old.`
//               )
//             : console.log(`Dog Number ${i + 1} is still a puppy`);
//     });
// }

// checkDogs(julia, kate);

// // Map Function
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUSD = 1.1;
// const usdMovements = movements.map((txaction) => txaction * euroToUSD);
// console.log(usdMovements);

// // Filter Function
// const withdrawals = movements.filter((txaction) => txaction < 0);
// console.log(withdrawals);

// // Reduce Method
// const balance = movements.reduce(function (accumulator, txaction) {
//     return accumulator + txaction;
// });

// const maxTxaction = movements.reduce(function (accum, txaction) {
//     return accum < txaction ? txaction : accum;
// }, movements[0]);
// console.log(maxTxaction);

// // CC #2
// function calcAverageHumanAge(ages) {
//     // 1.
//     const ageInHumanYrs = ages.map((age) => {
//         if (age <= 2) return 2 * age;
//         else return 16 + age * 4;
//     });
//     // 2.
//     const adultDogs = ageInHumanYrs.filter((age) => age >= 18);
//     // 3.
//     const average =
//         adultDogs.reduce((accum, age) => accum + age, 0) / adultDogs.length;
//     return average;
// }
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// // CC #3
// function calcAverageHumanAge(ages) {
//     // 1.
//     const average = ages
//         .map((age) => {
//             if (age <= 2) return 2 * age;
//             else return 16 + age * 4;
//         })
//         .filter((age) => age >= 18)
//         .reduce((accum, age, i, array) => accum + age / array.length, 0);
//     return average;
// }
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// // Find method
// const currentAccount = accounts.find((account) => account.userName === "tp");
// console.log(accounts, currentAccount);

// // sort
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // const sorted = movements.sort((a, b) => {
// //     // Swap
// //     if (a > b) return 1;
// //     // no Swap
// //     if (a < b) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);

// -------------------------------------------------------------------
// Numbers Dates Currencies

console.log(3 === 3.0);
// Buggy Behaviour due to JS being unable to correctly store fractions in base2 system.
console.log(0.1 + 0.2);

// Convert Strings to Numbers
console.log(+"20");

// Random Value Function
const randomInt = (min, max) =>
    Math.trunc(Math.random() * (max - min) + 1) + min;

// Date & time

// const now = new Date();
// console.log(now);
// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2002, 10, 2, 12, 12, 12));
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Dates
const future = new Date(2032, 10, 2);
console.log(future);
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getFullYear());
console.log(future.getTime());
console.log(future.toISOString());

/*
Advanced Dom
Coords for the button clicked
console.log(event.target.getBoundingClientRect());
Scroll Distance
console.log("X/Y", window.pageXOffset, window.pageYOffset);
ViewPort Height Width
console.log(
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
);
const h1 = document.querySelector("h1");
// Going Down
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes); // Direct Children
console.log(h1.children); // Direct Child Elements

// Going Up
console.log(h1.parentNode); // Direct Parent Node
console.log(h1.parentElement); // Direct Parent Element
// h1.closest(".header").style.background = "var(--gradient-secondary)";

// Sideways
console.log(h1.previousElementSibling); // Direct Previous Element
console.log(h1.nextElementSibling); // Direct Next Element

// Intersection Observer API
const callback = function () {
    console.log("Intersection");
};
const options = {
    root: null,
    threshold: 0.1,
};
// Observer Object initialised
const observer = new IntersectionObserver(callback, options);
// Target to be observed
observer.observe(section1);
*/
("use strict");
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

// CC#2
// 1.
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    
    // Instance Methods
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is Running at ${this.speed} km/hr.`);
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is Running at ${this.speed} km/hr.`);
    }
    
    // Getter
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

// ES6 Classes
class Person {
    // Constructor invoked when new obj is instantiated
    constructor(fullname, birthYr) {
        // Setter invoked for fullName
        this.fullName = fullname;
        this.birthYr = birthYr;
    }
    // Instance Methods: Accessible to all objects
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
    // Static Method: Accesible only to the class
    static hey() {
        console.log("Helloww!");
    }
}

const tejas = new Person("Tejas Patade", 2002);
tejas.calcAge();
console.log(tejas.age);

// Object.create()
// Object to be used as protoype
const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYr);
    },
};

// New person obj that has PersonProto obj as it protoype
const raju = Object.create(PersonProto);
console.log(raju);


// Inheritance
// function Person(firstName, birthYr) {
//     // Instance Properties
//     this.firstName = firstName;
//     this.birthYr = birthYr;
// }
// Person.prototype.calcAge = function () {
    //     return 2022 - this.birthYr;
    // };
    // // Student Inherits Person
    // function Student(firstName, birthYr, course) {
        //     // Calling constructor for a Person
        //     Person.call(this, firstName, birthYr);
        //     this.course = course;
        // }
        // Student.prototype.introduce = function () {
            //     console.log(`My Name is ${this.firstName}, I Study ${this.course}`);
            // };
            
            // const om = new Student("Om Shinde Desai", 2002, "CS");

// Inheritance ES6
class Person {
    // Constructor invoked when new obj is instantiated
    constructor(fullname, birthYr) {
        // Setter invoked for fullName
        this.fullName = fullname;
        this.birthYr = birthYr;
    }
    // Instance Methods: Accessible to all objects
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
    // Static Method: Accesible only to the class
    static hey() {
        console.log("Helloww!");
    }
}
class Student extends Person {
    constructor(fullname, birthYr, course) {
        super(fullname, birthYr);
        this.course = course;
    }
}
class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
    }
    
    // Public Interface
    deposit(amount) {
        this.movements.push(amount);
    }
    
    withdrawal(amount) {
        this.deposit(-amount);
    }
}

const acc1 = new Account("Tejas", "INR", 6969);

*/
("use strict");

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

/*
// Old Way 👴🏼
const getCountry = function (country) {
    const req = new XMLHttpRequest();
    req.open("GET", `https://restcountries.com/v2/name/${country}`);
    req.send();

    // Wait for request to finish load asynchronously with event listener
    req.addEventListener("load", function () {
        // console.log(this.responseText);

        const [country] = JSON.parse(this.responseText);
        console.log(country);
        render(country);

        // Get Neighbour
        if (!country.borders) return;
        const [neigh] = country.borders;
        if (!neigh) return;
        // AJAX Call 2
        const req2 = new XMLHttpRequest();
        req2.open("GET", `https://restcountries.com/v2/alpha/${neigh}`);
        req2.send();
        req2.addEventListener("load", function () {
            const data = JSON.parse(this.responseText);
            render(data, "neighbour");
        });
    });
};

getCountry("germany");


// Modern ES6 Way
function render(country, className = "") {
    const markup = `
    <article class="country ${className}">
      <img class="country__img" src="${country.flag}" />
      <div class="country__data">
        <h3 class="country__name">${country.name}</h3>
        <h4 class="country__region">${country.region}</h4>
        <p class="country__row"><span>👫</span>${(
            +country.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${country.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${country.currencies[0].name}</p>
      </div>
    </article>
`;

    countriesContainer.insertAdjacentHTML("beforeend", markup);
    countriesContainer.style.opacity = 1;
}

function getJSON(url, errMsg) {
    return fetch(url).then((response) => {
        if (!response.ok) throw new Error(errMsg);
        return response.json();
    });
}

function getCountry(country) {
    getJSON(`https://restcountries.com/v2/name/${country}`, "Country Not Found")
        .then(([data]) => {
            render(data);
            console.log(data);

            // get neighbour
            const neigh = data.borders[0];
            if (!neigh) throw new Error("No Neighbour for Country.");
            return getJSON(
                `https://restcountries.com/v2/alpha/${neigh}`,
                "Country Not Found"
            );
        })
        .then((neigh) => render(neigh, "neighbour"))
        .catch((error) => console.log(`Error ${error}`));
}

// CC#1
function whereAmI(lat, lng) {
    fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=226258793177075200710x27966 `
    )
        .then((response) => {
            if (!response.ok)
                throw new Error(
                    "Too Many Requests to Geocode API",
                    response.status
                );
            return response.json();
        })
        .then((data) =>
            console.log(`You are in ${data.region}, ${data.country}`)
        )
        .catch((err) => console.error(err.message));
}
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

// btn.addEventListener("click", () => {
//     getCountry("germany");
// });



const seconds = 2;
wait(seconds).then(() => {
    console.log(`Waited for ${seconds} seconds.`);
});


// Promisifying setTimeout function
const wait = function (secs) {
    return new Promise((resolve) => {
        setTimeout(resolve, secs * 1000);
    });
};

const imgContainer = document.querySelector(".images");
function createImage(imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement("img");
        img.src = imgPath;
        img.addEventListener("load", function () {
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener("error", function (event) {
            reject(new Error("Image nor Found."));
        });
    });
}

createImage("img/img1.jpg")
    .then((img) => {
        console.log("image loaded");
        return wait(2);
    })
    .catch((err) => console.error(err));

function render(country, className = "") {
    const markup = `
    <article class="country ${className}">
      <img class="country__img" src="${country.flag}" />
      <div class="country__data">
        <h3 class="country__name">${country.name}</h3>
        <h4 class="country__region">${country.region}</h4>
        <p class="country__row"><span>👫</span>${(
            +country.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${country.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${country.currencies[0].name}</p>
      </div>
    </article>
`;

    countriesContainer.insertAdjacentHTML("beforeend", markup);
    countriesContainer.style.opacity = 1;
}
const whereAmI = async function (country) {
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    // console.log(res);

    const [obj] = await res.json();
    console.log(obj);
    render(obj);
};
whereAmI("germany");
console.log("Hello");
*/
