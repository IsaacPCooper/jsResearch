let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let fruitShelf = document.getElementById("fruit-shelf")
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let sortBtn = document.getElementById("sort-btn")

fruitShelf.textContent = fruit;

function sortFruits(){
    for (let i = 0; i < fruit.length; i++){
        if (fruit[i] === "🍎"){
            appleShelf.textContent += "🍎"
        }
        else if (fruit[i] === "🍊"){
            orangeShelf.textContent += "🍊"
        }
    }
fruitShelf.textContent = "";
sortBtn.style.display = "none";
}