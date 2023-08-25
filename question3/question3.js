window.addEventListener("load", function(){
    const cards = document.querySelectorAll(".card");
    console.log(cards);

    cards.forEach(function (card) {

        card.addEventListener("click", function(event) {
            event.target.classList.toggle("card-clicked");
        })

    });

    const btnRestCardColor = document.querySelector("#resetCardColor");
    console.log(btnRestCardColor);
    
    btnRestCardColor.addEventListener("click", function(event){

        cards.forEach(function (cardToggle) {
            cardToggle.classList.remove("card-clicked");
        });

    });

});