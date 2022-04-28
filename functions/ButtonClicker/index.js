// define variables
let saveScoreElement = document.getElementById("saved-score");
let clickElement = document.getElementById("clicked-number");
let clicks = 0;

// Function to add clicks
function addClick() {
    clicks++;
    clickElement.textContent = clicks;
}

// Function to save score, and add to DOM
function saveScore(){
    var scoreStr = clicks + " - ";
    saveScoreElement.textContent += scoreStr;
}