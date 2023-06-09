
// *************************  ENONNCE - 1 **********************//

// 1- saisir un nombre dans un formulaire
// 2- Tant que la valeur est (inférieure ou égale à 3) ou (supérieure ou égale à 120) ou une (string), la boîte de dialogue s'affiche, qui vous demande "Indiquez votre âge".
// 3- Déclarer une variable "majoriteFR" qui comprend la valeur 18;
// 4- Déclarer une fonction "afficheAge" qui prend en paramètre un nombre 
// la fonction n'a pas de valeur de retour


// ---------------------- Exercices - 1 ----------------------- //

var nombre = prompt("Quel est votre âge?");

// var compteur = 0;

while (nombre <= 3 || nombre>= 120 || (isNaN(nombre))) {
  nombre = prompt("Quel est votre âge?");
}

var majoriteFR = 18;

function afficheAge(age){
    // document.write(age);

}

// afficheAge(nombre);
