window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

var hmb = document.querySelector(".hmb");
var menu = document.querySelector("nav");
hmb.addEventListener("click", () => {
    hmb.classList.toggle("open-hmb");
    menu.classList.toggle("open-menu")
})
function openSearchBox(){
    document.querySelector(".search-input").classList.toggle("open-search-box");
}