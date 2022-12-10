"use strict";

// ------------- DOM selections
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");
const header = document.querySelector(".header");

// ------------- Modal window
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

// ------------- Cookie Element Creation
const cookieMsg = document.createElement("span");
cookieMsg.classList.add("cookie-message");
cookieMsg.innerHTML =
    "We use cookies to analyse who visits our site.<button class='btn btn--close-cookie'>Got it!</button>";
header.before(cookieMsg);
cookieMsg.style.backgroundColor = "#37383d";
// Close Cookie Msg
document
    .querySelector(".btn--close-cookie")
    .addEventListener("click", function () {
        cookieMsg.remove();
    });

// ------------- Smooth Scrolling
btnScrollTo.addEventListener("click", (event) => {
    // Scroll To (Old School Way) 👴🏽
    // Co-ordinates of section1
    // const s1Coords = section1.getBoundingClientRect();
    // console.log(s1Coords);
    // window.scrollTo({
    //     left: s1Coords.left + window.pageXOffset,
    //     top: s1Coords.top + window.pageYOffset,
    //     behavior: "smooth",
    // });

    // Smooth Scroll (Modern Way) 👦🏽
    section1.scrollIntoView({ behavior: "smooth" });
});

// ------------- Navigation Bar Smooth Scrolls
// document.querySelectorAll(".nav__link").forEach((navLink) => {
//     navLink.addEventListener("click", (event) => {
//         // Prevent From Reloading and Navigate to Anchor
//         event.preventDefault();
//         console.log("Link Clicked.");

//         // Determining where to scroll to
//         const sectionId = navLink.getAttribute("href");
//         document
//             .querySelector(sectionId)
//             .scrollIntoView({ behavior: "smooth" });
//     });
// });

// Event delegation Method more efficient 🤓
// 1. Add Event Listener to Common Parent Element
document.querySelector(".nav__links").addEventListener("click", (event) => {
    // 2. Determine Element that Originated the event.
    console.log(event.target);

    // Prevent From Reloading and Navigate to Anchor
    event.preventDefault();

    // Check if event generated on a nav__link
    if (event.target.classList.contains("nav__link")) {
        console.log("Link CLicked");
        const sectionId = event.target.getAttribute("href");
        document
            .querySelector(sectionId)
            .scrollIntoView({ behavior: "smooth" });
    }
});

// Tabbed Component

// -------------------------------------------------------------------------------------
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
*/
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
