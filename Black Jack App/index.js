// Variables for two cards
let firstCard = 2;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

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

console.log(message);
