function cr() {
var pi = Math.PI;

var input = prompt("Heyo, enter the radius you are given then we will give you the circumference.");
if (input.trim().length == 0 || isNaN(input)) return alert("Invalid input.")
var formula = 2 * (pi * input)
alert(`Shortened Version: ${formula.toFixed(2)}\n\nFull Version: ${formula}`)
}
