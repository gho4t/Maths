function halve() {
var a = prompt(`No problem! Enter the number you need to halve below.`, `333`)
if (a.length == 0) return alert(`Please specify a number!`)
if (isNaN(a)) return alert(`Please specify a number, not letters!`)
alert(a / 2)
}

function double() {
  var b = prompt(`No problem! Enter the number you need to double below.`, `150`)
  if (b.length == 0) return alert(`Please specify a number!`)
  if (isNaN(b)) return alert(`Please specify a number, not letters!`)
  alert(b * 2)
}

function coac() {

var c = prompt(`Okay. Enter the number below and we'll give you the radius of it in 2 decimal places`, `21`)
if (c.length == 0 || isNaN(c)) return alert(`Not a valid number!`)
alert(`Full value: ${Math.PI * 2 * c} ` + `\n2 decimal places: ` + (Math.PI * 2 * c).toFixed(2))
}

function diameter() {

var d = prompt(`Okay. Enter the number below and we'll give you the radius of it in 2 decimal places`, `21`)
if (d.length == 0 || isNaN(d)) return alert(`Not a valid number!`)
alert(`Full value: ${Math.PI * d} ` + `\n2 decimal places: ` + (Math.PI * d).toFixed(2))
}

function area() {
  var e = prompt(`Okay. Enter the number below and we'll give you the radius of it in 2 decimal places`, `21`)
  if (e.length == 0 || isNaN(e)) return alert(`Not a valid number!`)
  alert(`Full value: ${Math.PI * (e * e)}` + `\n2 decimal places: ` + (Math.PI * (e * e)).toFixed(2))
}
