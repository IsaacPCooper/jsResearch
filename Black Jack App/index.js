// Variables for two cards
let firstCard = 2;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");



function startGame(){
    cardsEl.textContent= "Cards: " +  firstCard + " " + secondCard;
    sumEl.textContent= "Sum: " +  sum;
    
// if condition
if (sum <= 20) {
    message = "Draw a card?"
 } 
 else if (sum === 21) {
     hasBlackJack = true;
     message = "You got a BlackJack!"
 } 
 else {
     message = "You're out!"
     isAlive = false;
 }
 messageEl.textContent = message;
 console.log(message);

}

function newCard(){
    let card = 2;

    sum += card;

    startGame();
    console.log("Drawing a New card from the deck....")
}

