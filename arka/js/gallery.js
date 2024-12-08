let j = 0;
let gallery = document.querySelectorAll(".gallery img");
gallery.forEach((e) => {
    e.setAttribute("onclick", "showImage(" + (j++) + ")")

})

function showImage(i) {
    let imageSrc = gallery[i].src;
    document.getElementById("image-show-img").src = imageSrc;
    document.querySelector(".image-show-box div a").href = imageSrc
    document.querySelector(".image-show").classList.add("image-show-open")
}
function closeImageShowBox() {
    document.querySelector(".image-show").classList.remove("image-show-open")
}