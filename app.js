"use strict";
// Variables
const magnifierIcon = document.querySelector(".magnifier");
const srchBarCont = document.querySelector(".search-bar-container");
const srchInp = document.querySelector("#search");
const micIcon = document.querySelector(".mic-icon");
magnifierIcon.addEventListener("click", function () {
    srchInp.classList.toggle("active");
    micIcon.classList.toggle("active");
    srchBarCont.classList.toggle("active");
});
