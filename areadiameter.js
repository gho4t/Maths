function ad() {
var pi = Math.PI;

var input = prompt("Heyo, enter the diameter you are given then we will give you the area.");
if (input.trim().length == 0 || isNaN(input)) return alert("Invalid input.")
var formula = (0.25 * pi) * (input * input)
alert(`Shortened Version: ${formula.toFixed(2)}\n\nFull Version: ${formula}`)
}
