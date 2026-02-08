"use strict";
// Variables
const magnifireIcon = document.querySelector(".magnifire");
const searchInp = document.querySelector("#search");
const micIcon = document.querySelector(".mic-icon");
magnifireIcon.addEventListener("click", function () {
    searchInp.classList.toggle("active");
    micIcon.classList.toggle("active");
});
