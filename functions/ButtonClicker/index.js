
// define variables
let clickElement = document.getElementById("clickedNumber");
let clicks = 0;

// Function to add clicks
function addClick() {
    clicks++;
    clickElement.innerText = clicks
}