let errorEl = document.getElementById("error-message");
let errorMessage = "Oops, something went wrong!";

function oops(){
  errorEl.textContent = errorMessage
  errorEl.style.color = "red";
}
