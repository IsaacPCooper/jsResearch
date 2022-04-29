let num1 = 7;
let num2 = 3;
let result = 0;


document.getElementById("number1").textContent = num1;
document.getElementById("number2").textContent = num2;
document.getElementById("result").textContent = result;

function add(){
  result = num1 + num2;
  document.getElementById("operator").textContent = " + "
  document.getElementById("result").textContent = result;
}

function subtract(){
  result = num1 - num2;
  document.getElementById("operator").textContent = " - "
  document.getElementById("result").textContent = result;
}

function multiply(){
  result = num1 * num2;
  document.getElementById("operator").textContent = " * "
  document.getElementById("result").textContent = result;
}

function divide(){
  result = num1 / num2;
  document.getElementById("operator").textContent = " / "
  document.getElementById("result").textContent = result;
}