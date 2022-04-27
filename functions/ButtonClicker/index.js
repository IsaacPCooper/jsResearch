// define variables
let clickElement = document.getElementById("clicked-number");
let clicks = 0;

// Function to add clicks
function addClick() {
    clicks++;
    clickElement.innerText = clicks
}

function saveScore(){
    console.log(clicks);
}