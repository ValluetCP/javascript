
// *************************  ENONNCE - 1 **********************//

// 1- saisir un nombre dans un formulaire
// 2- Tant que la valeur est (inférieure ou égale à 3) ou (supérieure ou égale à 120) ou une (string), la boîte de dialogue s'affiche, qui vous demande "Indiquez votre âge".
// 3- Déclarer une variable "majoriteFR" qui comprend la valeur 18;
// 4- Déclarer une fonction "afficheAge" qui prend en paramètre un nombre 
// la fonction n'a pas de valeur de retour


// ---------------------- Exercices - 1 ----------------------- //

// var nombre = prompt("Quel est votre âge?");

// // var compteur = 0;

// while (nombre <= 3 || nombre>= 120 || (isNaN(nombre))) {
//   nombre = prompt("Quel est votre âge?");
// }

// var majoriteFR = 18;

// function afficheAge(age){
//     // document.write(age);

// }

// afficheAge(nombre);


// *************************  ÉNONCE (modifié) - 1  - COMPLET **********************//

// Lien énoncé : https://sharemycode.fr/yd5


// 1- saisir un nombre dans un formulaire

// 2- Tant que la valeur est (inférieure ou égale à 3) "ou" (supérieure ou égale à 120) ou une (string), la boîte de dialogue s'affiche, qui vous demande "Indiquez votre âge".

// 3- Déclarer une variable "majoriteFR" qui comprend la valeur 18;

// 4- Déclarer une fonction "afficheAge" qui prend deux paramètres "agePersonne" et "ageAdulte" de type nombre et sans valeur de retour

// 5- Les opérations effectuées par la fonction :

//     a- Si "agePersonne" est supérieur à 3 "et" inférieur à "ageAdulte", à partir d'une boîte de dialogue, on affiche le message suivant "Vous n'êtes pas encore majeur ! "

//     b- Si "agePersonne" est supérieur ou égal à "ageAdulte" "et" inférieur ou égale à 120, à partir d'une boîte de dialogue, on affiche le message suivant "Bienvenue, vous êtes majeur. :)"

// 7- Au moment d'exécution de la fonction, nous passerons en paramètre 
//     a- La valeur saisie dans le formulaire (premier paramètre)
//     b- La variable "majoriteFR" (deuxième paramètre)


// ---------------------- Exercices - 1 (suite)----------------------- //

var nombre = prompt("Quel est votre âge?");

// var compteur = 0;

while (nombre <= 3 || nombre>= 120 || (isNaN(nombre))) {
  nombre = prompt("Quel est votre âge?");
}

var majoriteFR = 18;

function afficheAge(age){
    // document.write(age);

}