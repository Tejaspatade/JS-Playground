"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

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

// Cookie Element Creation
const header = document.querySelector(".header");
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

// Smooth Scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");
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

//

// -------------------------------------------------------------------------------------
// Coords for the button clicked
// console.log(event.target.getBoundingClientRect());
// Scroll Distance
// console.log("X/Y", window.pageXOffset, window.pageYOffset);
// ViewPort Height Width
// console.log(
//     document.documentElement.clientWidth,
//     document.documentElement.clientHeight
// );
