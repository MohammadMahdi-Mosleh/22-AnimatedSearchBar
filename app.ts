// Variables
const magnifireIcon = document.querySelector(".magnifire") as HTMLImageElement;
const searchInp = document.querySelector("#search") as HTMLInputElement;
const micIcon = document.querySelector(".mic-icon") as HTMLImageElement;

magnifireIcon.addEventListener("click", function() {
    searchInp.classList.toggle("active");
    micIcon.classList.toggle("active");

})
