"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: "Tejas Patade",
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2020-05-27T17:01:17.194Z",
        "2020-07-11T23:36:17.929Z",
        "2020-07-12T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "pt-PT", // de-DE
};

const account2 = {
    owner: "Jeremy Wang",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-06-25T18:49:59.371Z",
        "2020-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
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

// DIFFERENT DATA! Contains movement dates, currency and locale

// const account5 = {
//     owner: "Jonas Schmedtmann",
//     movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
//     interestRate: 1.2, // %
//     pin: 1111,

//     movementsDates: [
//         "2019-11-18T21:31:17.178Z",
//         "2019-12-23T07:42:02.383Z",
//         "2020-01-28T09:15:04.904Z",
//         "2020-04-01T10:17:24.185Z",
//         "2020-05-08T14:11:59.604Z",
//         "2020-05-27T17:01:17.194Z",
//         "2020-07-11T23:36:17.929Z",
//         "2020-07-12T10:51:36.790Z",
//     ],
//     currency: "EUR",
//     locale: "pt-PT", // de-DE
// };

// const account6 = {
//     owner: "Jessica Davis",
//     movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//     interestRate: 1.5,
//     pin: 2222,

//     movementsDates: [
//         "2019-11-01T13:15:33.035Z",
//         "2019-11-30T09:48:16.867Z",
//         "2019-12-25T06:04:23.907Z",
//         "2020-01-25T14:18:46.235Z",
//         "2020-02-05T16:33:06.386Z",
//         "2020-04-10T14:43:26.374Z",
//         "2020-06-25T18:49:59.371Z",
//         "2020-07-26T12:01:20.894Z",
//     ],
//     currency: "USD",
//     locale: "en-US",
// };

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

// Global Variables
let currentAccount;
let sorted = false;

// Displaying Transactions
const displayTransactions = function (transactions, sort = false) {
    // Remove any Existing irrelevant transactions
    containerMovements.innerHTML = "";

    // Sorted or No
    const txSorted = sort
        ? transactions.slice().sort((a, b) => a - b)
        : transactions;

    txSorted.forEach(function (transaction, i) {
        // Determine Type of current transaction
        const txType = transaction > 0 ? "deposit" : "withdrawal";

        // Create HTML for current Transaction from array
        const markup = `
        <div class="movements__row">
            <div class="movements__type movements__type--${txType}">
                        ${i + 1} ${txType}
            </div>
            <div class="movements__value">${transaction.toFixed(2)}$</div>
        </div>
        `;

        // Add HTML onto parent element
        containerMovements.insertAdjacentHTML("afterbegin", markup);
    });
};

// Calculating Balance
function calcBalance(account) {
    account.balance = account.movements.reduce(
        (accum, current) => accum + current,
        0
    );
    labelBalance.textContent = `$${account.balance.toFixed(2)}`;
}

// Calculating Summary Insights
function calcInsightSummary(acc) {
    const deposits = acc.movements
        .filter((txaction) => txaction > 0)
        .reduce((accum, current) => accum + current, 0);
    labelSumIn.textContent = `${deposits.toFixed(2)}💲`;
    const deductions = acc.movements
        .filter((txaction) => txaction < 0)
        .reduce((accum, current) => accum + current, 0);
    labelSumOut.textContent = `${Math.abs(deductions).toFixed(2)}💲`;
    const interest = acc.movements
        .filter((txaction) => txaction > 0)
        .map((deposit) => (deposit * acc.interestRate) / 100)
        .filter((current) => current >= 1)
        .reduce((accum, current) => accum + current, 0);
    labelSumInterest.textContent = `${interest.toFixed(2)}💲`;
}

// Call All 3 UI methods
function updateUI() {
    calcBalance(currentAccount);
    calcInsightSummary(currentAccount);
    displayTransactions(currentAccount.movements);
}

// Generating Usernames
function generateUsernames(accs) {
    accs.forEach(function (account) {
        const username = account.owner
            .toLowerCase()
            .split(" ")
            .map((name) => name[0])
            .join("");
        account.userName = username;
    });
}
generateUsernames(accounts);
// console.log(account1);

// Event Listeners
// Login Functionality
btnLogin.addEventListener("click", function (event) {
    // Prevent Form from Submitting
    event.preventDefault();

    // Get Account for corresponding username
    currentAccount = accounts.find(
        (account) => account.userName === inputLoginUsername.value
    );

    // Check if username & pin are valid
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        console.log("Login Successful");
        // Display UI, Welcome Msg, Balance, Summary(Insights), Transactions
        containerApp.style.opacity = 100;
        labelWelcome.textContent = `Welcome, ${
            currentAccount.owner.split(" ")[0]
        }`;

        // Clear input Fields
        inputLoginUsername.value = "";
        inputLoginPin.value = "";
        inputLoginPin.blur();

        // Call utility functions
        updateUI();
    }
});

// Transfer Funds Functionality
btnTransfer.addEventListener("click", function (event) {
    // Prevent Form from Submitting
    event.preventDefault();

    // Taking inputs
    const amount = Number(inputTransferAmount.value);
    const recipient = accounts.find(
        (acc) => acc.userName === inputTransferTo.value
    );
    console.log(amount, recipient);

    // Validate Transfer amount
    if (
        amount > 0 &&
        recipient &&
        amount <= currentAccount.balance &&
        recipient?.userName !== currentAccount.userName
    ) {
        currentAccount.movements.push(-1 * amount);
        recipient.movements.push(amount);
        updateUI();
        console.log("Txaction Successfull.");
    }
    // Clear input Fields
    inputTransferAmount.value = "";
    inputTransferTo.value = "";
    inputTransferAmount.blur();
});

// Request Loan Functionality
btnLoan.addEventListener("click", function (event) {
    // Prevent Form from Submitting
    event.preventDefault();

    // Check For Loan Request validity
    const loanAmount = Math.floor(inputLoanAmount.value);
    if (
        loanAmount > 0 &&
        currentAccount.movements.some(
            (txaction) => txaction >= loanAmount * 0.1
        )
    ) {
        // Deposit Approved Loan Amount
        console.log("Loan Sanctioned. :)");
        currentAccount.movements.push(loanAmount);
        // Update UI
        updateUI();
    }
    inputLoanAmount.value = "";
    inputLoanAmount.blur();
});

// Close Account Functionality
btnClose.addEventListener("click", function (event) {
    // Prevent Form from Submitting
    event.preventDefault();

    // Check Valid Credentials
    if (
        inputCloseUsername.value === currentAccount.userName &&
        Number(inputClosePin.value) === currentAccount.pin
    ) {
        // Hide UI
        containerApp.style.opacity = 0;

        // Calculate index
        const index = accounts.findIndex(
            (acc) => acc.userName === currentAccount.userName
        );
        // Remove Account from accounts array
        accounts.splice(index, 1);
        console.log("Account Closed Succesdfully.");
    }
    // Clear input Fields
    inputCloseUsername.value = "";
    inputClosePin.value = "";
    inputClosePin.blur();
});

// Sort Transactions
btnSort.addEventListener("click", function (event) {
    // Prevent Form from Submitting
    event.preventDefault();
    displayTransactions(currentAccount.movements, !sorted);
    sorted = !sorted;
});

// -------------------------------------------------------------------------------------------
/////////////////////////////////////////////////
/////////////////////////////////////////////////
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
