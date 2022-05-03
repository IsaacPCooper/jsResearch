function rollDice(){
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

console.log( rollDice() );