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

// Global Variables
let currentAccount;

// Displaying Transactions
const displayTransactions = function (transactions) {
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
            <div class="movements__value">${transaction}$</div>
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
    labelBalance.textContent = `$${account.balance}`;
}

// Calculating Summary Insights
function calcInsightSummary(acc) {
    const deposits = acc.movements
        .filter((txaction) => txaction > 0)
        .reduce((accum, current) => accum + current, 0);
    labelSumIn.textContent = `${deposits}💲`;
    const deductions = acc.movements
        .filter((txaction) => txaction < 0)
        .reduce((accum, current) => accum + current, 0);
    labelSumOut.textContent = `${Math.abs(deductions)}💲`;
    const interest = acc.movements
        .filter((txaction) => txaction > 0)
        .map((deposit) => (deposit * acc.interestRate) / 100)
        .filter((current) => current >= 1)
        .reduce((accum, current) => accum + current, 0);
    labelSumInterest.textContent = `${interest}💲`;
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
    const loanAmount = Number(inputLoanAmount.value);
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
