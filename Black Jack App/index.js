let player = {
    name: "Isaac",
    chips: 100
}
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el")
let startBtn = document.getElementById("start-btn");
let drawBtn = document.getElementById("draw-btn");

drawBtn.style.display = "none"
playerEl.textContent = player.name + ": £" + player.chips;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13 ) + 1; // range between 1-13
    if (randomCard === 1){
        return 11;
    } 
    else if(randomCard > 10 ){
        return 10;
    }
    return randomCard;
}

function startGame() {
    isAlive = true;
    for (let i = 0; i < 2; i++){
        newCard()
    }
    sum = cards[0] + cards[1];
    drawBtn.style.display = "inline-block"
    startBtn.style.display = "none"
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
     drawBtn.style.display = "none"
 } 
 else {
     message = "You're out!"
     isAlive = false;
     drawBtn.style.display = "none"
 }
 messageEl.textContent = message;
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
    }
}



