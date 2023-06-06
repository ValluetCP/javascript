
var temperature = prompt("Veuillez saisir la température en degrés celsius?")


// [°F] = [°C] x 9/5 + 32

var faren = temperature * (9/5) + 32
document.write("<p> la temperature est de " + faren +"°F.</p>")