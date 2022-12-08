"use strict";

///////////////////////////////////////
// Modal window

// Selecting all DOM objects
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showModalBtns = document.querySelectorAll(".btn--close-modal");
const closeModalBtn = document.querySelector(".btn--show-modal");

// console.log(showModalBtn);
// Iterate All 3 show-modal buttons and add event listeners for clicks
for (let i = 0; i < showModalBtns.length; i++) {
    showModalBtns[i].addEventListener("click", function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}

// Hide The Modal
const hideModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

// Hide modal when close-modal is clicked
closeModalBtn.addEventListener("click", hideModal);
// Hide modal when overlay is clicked
overlay.addEventListener("click", hideModal);
// Listen for Esc Key press
document.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        hideModal();
    }
});
