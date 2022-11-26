"use strict";

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Destructuring Arrays
const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    order(entreeIndex, mainIndex) {
        return [this.starterMenu[entreeIndex], this.mainMenu[mainIndex]];
    },

    openingHours, // ES6 Object Literal Syntax update

    orderPasta(ingredient1, ingredient2, ingredient3) {
        console.log(
            `Here's Your Pasta with ${ingredient1}, ${ingredient2} and ${ingredient3}`
        );
    },

    orderPizza(mainIngredient, ...optionalToppings) {
        console.log(mainIngredient, optionalToppings);
    },
};

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

// Sets
const orderSet = new Set([
    "Risotto",
    "Pasta",
    "Pizza",
    "Risotto",
    "Pizza",
    "Spaghetti",
]);
console.log(orderSet);
// Example
const staff = [
    "Waiter",
    "Chef",
    "Manager",
    "Waiter",
    "Waiter",
    "Chef",
    "Sous Chef",
];
// Check Unique Job positions
console.log(new Set(staff).size);
// Maps
const restaurantMap = new Map();
restaurantMap
    .set("name", "Classico Italiano")
    .set(1, "Venice, Italy")
    .set(2, "Paris, France")
    .set(true, "We are open :)")
    .set(false, "We are closed :(");
console.log(restaurantMap.get(true));

// -------------------------------------------------
// // CC1
const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
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
