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

// CC4
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}
console.log(tips, totals);

function calcAverage(arr) {
  let sum = 0.0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum / arr.length;
}

console.log(calcAverage(totals));
