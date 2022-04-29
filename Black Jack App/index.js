// Variables for two cards
let firstCard = 2;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

// if condition
if (sum <= 20) {
    console.log("Draw a card?")
} else if (sum === 21){
    hasBlackJack = true;
    // YOU WIN!
}
console.log("It's over!")
    // You lose!