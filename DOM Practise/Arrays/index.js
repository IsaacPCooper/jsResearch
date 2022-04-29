let sentance = ["Hi ", "I ", "hope ", "you ", "are ", "well."]
let greetingEl = document.querySelector("#greeting-element")

for (let i = 0; i < sentance.length; i++) {
    greetingEl.textContent += sentance[i];
}