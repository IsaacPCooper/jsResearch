const mainDiv = document.getElementById("main-div");

mainDiv.innerHTML += "<button onclick='buy()'>" + "BUY NOW!" + "</button>"


function buy(){
    mainDiv.innerHTML += "<p> Thanks for your purchase! </p>"
}
