"use strict";

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
*/

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

function getCountry(country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then((response) => response.json())
        .then(([data]) => {
            render(data);
            console.log(data);

            // get neighbour
            const neigh = data.borders[0];
            if (!neigh) return;
            return fetch(`https://restcountries.com/v2/alpha/${neigh}`);
        })
        .then((response) => response.json())
        .then((neigh) => render(neigh, "neighbour"));
}

btn.addEventListener("click", () => {
    getCountry("germany");
});
