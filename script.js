"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: "Tejas Patade",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Jeremy Wang",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Imane Anys ",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Michael Reeves",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Displaying Transactions
const displayMovements = function (transactions) {
    // Remove any Existing irrelevant transactions
    containerMovements.innerHTML = "";
    transactions.forEach(function (transaction, i) {
        // Determine Type of current transaction
        const txType = transaction > 0 ? "deposit" : "withdrawal";

        // Create HTML for current Transaction from array
        const markup = `
        <div class="movements__row">
            <div class="movements__type movements__type--${txType}">
                        ${i + 1} ${txType}
            </div>
            <div class="movements__value">${transaction}</div>
        </div>
        `;

        // Add HTML onto parent element
        containerMovements.insertAdjacentHTML("afterbegin", markup);
    });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Arrays Deep Dive

const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// CC #1
let julia = [3, 5, 2, 12, 17];
let kate = [4, 1, 15, 8, 3];

function checkDogs(dogsJulia, dogsKate) {
    // 1.
    const copyJulia = dogsJulia.slice(1, 3);
    // 2.
    const dogs = copyJulia.concat(dogsKate);
    // 3.
    dogs.forEach(function (dog, i) {
        dog >= 3
            ? console.log(
                  `Dog Number ${i + 1} is an adult and is ${dog} years old.`
              )
            : console.log(`Dog Number ${i + 1} is still a puppy`);
    });
}

checkDogs(julia, kate);
