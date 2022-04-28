// Grab the h1 tag and store it as a variable
var welcomeElement = document.getElementById("welcome-element");
var myName = "Isaac";
var greetingMessage = "Welcome to the site, ";

var welcomingMessage = greetingMessage + myName;
welcomingMessage += "👋";

function welcomeMe(){
    welcomeElement.innerText = welcomingMessage;
}

// Create two variables for greeting
// Render the greeting on the html