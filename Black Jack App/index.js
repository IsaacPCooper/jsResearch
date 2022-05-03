// Variables for two cards
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13 ) + 1; // range between 1-13
    if (randomCard === 1){
        return 11;
    } 
    else if(randomCard < 10 ){
        return 10;
    }
    return randomCard;
}

function startGame() {
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
     cardsEl.textContent += cards[i] + " ";
    }
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
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
    console.log("Drawing a New card from the deck....")
}



