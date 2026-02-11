// Variables
const srchBarContain = document.querySelector('.search-bar-container') as HTMLDivElement;
const srchInpt = document.querySelector('.search-inpt') as HTMLInputElement;
const mic = document.querySelector('.fa-microphone') as HTMLElement;
const magnifier = document.querySelector('.fa-magnifying-glass') as HTMLElement;

// Functionality 
magnifier.addEventListener('click', () => {
    srchBarContain.classList.toggle('active');
})
