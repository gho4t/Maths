function halve() {
var input = prompt("Heyo, enter the number and we will double it for you.");
if (input.trim().length == 0 || isNaN(input)) return alert("Invalid input.")
var formula = input / 2;
alert(`Shortened Version: ${formula.toFixed(2)}\n\nFull Version: ${formula}`)
}
