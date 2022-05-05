const inputBtn = document.getElementById("input-btn");
let myLeads = ["example1","example2", "example3"];
const inputEl = document.getElementById("input-el");

// This also works, but is pointless code in this case: const inputValue = document.getElementById("input-el").value;

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++){
    console.log(myLeads[i]);
}

