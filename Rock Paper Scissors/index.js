let hands = ["🪨", "📰","✂️"]

function randomHand(){
   let randomIndex =  Math.floor(Math.random() * 3);
   return hands[randomIndex]; // This works because RandomIndex is used as the number, 0-2
}

console.log(randomHand())