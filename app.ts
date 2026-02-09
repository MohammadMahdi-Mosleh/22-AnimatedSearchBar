// Variables
const magnifierIcon = document.querySelector(".magnifier") as HTMLImageElement;
const srchBarCont = document.querySelector(".search-bar-container") as HTMLDivElement;
const srchInp = document.querySelector("#search") as HTMLInputElement;
const micIcon = document.querySelector(".mic-icon") as HTMLImageElement;

magnifierIcon.addEventListener("click", function() {
    srchInp.classList.toggle("active");
    micIcon.classList.toggle("active");
    srchBarCont.classList.toggle("active");

})

