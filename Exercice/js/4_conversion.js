
// Conversion de °C en °F  

var temperature = prompt("Veuillez saisir la température en degrés celsius?")

// Cette syntaxe effectue 2 opérations :
// - il exécution de la fonction prompt
// - stockage de la valeur dans notre variable

// [°F] = [°C] x 9/5 + 32

var faren = temperature * (9/5) + 32
document.write("<p> la temperature est de " + faren +"°F.</p>")






// Conversion de °F en °C

var tempFaren = prompt("Veuillez saisir la température en degrés fahrenheit?")

var tempCelcius = (tempFaren - 32) * 5/9
document.write("<p> la temperature est de " + tempCelcius +"°C.</p>")