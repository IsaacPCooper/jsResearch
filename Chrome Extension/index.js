const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = ["example1","example2", "example3"];


// This also works, but is pointless code in this case: const inputValue = document.getElementById("input-el").value;

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

let listItems = "";
for (let i = 0; i < myLeads.length; i++){
    listItems += "<li>" + myLeads[i] + "</li>";
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

    // This also works, but may be harder to understand!
    // document.createElement("li")
    // li.textContent = myLeads[i];
    // ulEl.append(li);
}
ulEl.innerHTML = listItems;

