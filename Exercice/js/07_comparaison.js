
// *************************  ENONNCE - 1 **********************//

// Comparaison de deux nombres
// Ecrivez un programme 07_comparaison.js qui fait saisir deux nombres puis compare leurs valeurs et affiche un message approprié (plus grand, plus petit, égal).


// ---------------------- Exercices - 1 ----------------------- //

var nombre1 = prompt("Veuillez saisir un premier nombre");
var nombre2 = prompt("Veuillez saisir un second nombre");


while (isNaN(nombre1)){
    nombre1 = prompt("Veuillez saisir un premier nombre");
}
while (isNaN(nombre2)){
    nombre2 = prompt("Veuillez saisir un second nombre");
}

if (nombre1 > nombre2){
    // document.write(nombre1 + " est supérieur à " + nombre2);
    document.write(`${nombre1} est supérieur à ${nombre2}`);
}
else if(nombre1 < nombre2){
    document.write(nombre1 + " est inférieur à " + nombre2);
}
else if(nombre1 == nombre2){
    document.write(nombre1 + " est égale à " + nombre2);
}