"use strict";
// Variables
const srchBarContain = document.querySelector('.search-bar-container');
const srchInpt = document.querySelector('.search-inpt');
const mic = document.querySelector('.fa-microphone');
const magnifier = document.querySelector('.fa-magnifying-glass');
// Functionality 
magnifier.addEventListener('click', () => {
    srchBarContain.classList.toggle('active');
});
