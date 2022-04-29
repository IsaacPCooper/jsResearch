let sentence = ["Hi", "I", "hope", "you", "are", "well."]
let greetingEl = document.querySelector("#greeting-element")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " ";
}