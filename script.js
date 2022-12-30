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
