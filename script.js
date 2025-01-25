var cards = document.querySelectorAll(".square");
var flippedcard = false
var firstcard, secondcard
function flipcard(event) {
    event.currentTarget.classList.add('show-face');
    if (!flippedcard) {
        flippedcard = true
        firstcard = this

    } else {
        flippedcard = false
        secondcard = this
    }
    console.log(firstcard, secondcard)
    console.log(firstcard.dataset.framework, secondcard.dataset.framework)
    if (firstcard.dataset.framework === secondcard.dataset.framework) {
        firstcard.removeEventListener("click", flipcard);
        secondcard.removeEventListener("click", flipcard);
        console.log("KOF KIIIIFFFF!! YAYY")
    } else {
        console.log("not kifkif!!! GHALET")
        setTimeout(() => {
            firstcard.classList.remove("show-face");
            secondcard.classList.remove("show-face");
        }, 1500);
    }

    console.log("c bon");
}

cards.forEach(card => card.addEventListener("click", flipcard));

(function shuffle(){
    cards.forEach(card =>{
        var randoomPos=Math.floor(Math.random()*12)
        card.style.order=randoomPos

    })
})()