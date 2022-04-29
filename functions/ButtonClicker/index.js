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
    let scoreStr = clicks + " - ";
    saveScoreElement.textContent += scoreStr;

    // Reset Clicks, and click Elements to 0.
    clickElement.textContent = 0;
    clicks = 0;
}