const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = `["example.com"]`;

myLeads = JSON.parse(myLeads);

console.log(myLeads)

myLeads.push("example2.com");

console.log(myLeads)

myLeads = JSON.stringify(myLeads)

console.log(typeof myLeads)


// This also works, but is pointless code in this case: const inputValue = document.getElementById("input-el").value;

inputBtn.addEventListener("click", function() {
    if (inputEl.value !== "") {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads();
    }
    else {
        alert("Cannot save an empty input.")
    }
})

function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++){
        listItems += `
        <li>
            <a target='_blank' href= '${myLeads[i]}'> ${myLeads[i]} </a>
         </li>`;
    }
    ulEl.innerHTML = listItems;
}

