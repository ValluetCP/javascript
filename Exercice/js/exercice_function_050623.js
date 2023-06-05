// Développez un programme en js :

// 1- Saisir deux valeurs à partir de deux champs de formulaire
// -une valeur en string et d'autre en numérique
// 2- Vérifier le type des deux valeurs (si elles sont respectivement bien string et numérique)
// 3- Créer (déclarer et implanter) une fonction qui prend ces deux valeurs en paramètre et elle concatène les deux valeurs en question afin de nous afficher la phrase suivante :
// "Je m'appelle ... et j'ai ... ans"

// CORRECTION
// // la syntaxe suivante effectue deux opérations distinctes en même temps:
// 1. elle exécute la fonction prédefinie de js (prompt) qui nous permet l'affichage d'une boîte de dialogue avec un champs de formulaire afin de saisir des valeurs string ou numérique
// 2. en déclarant une variable, nous pouvons stocker la valeur de retour de la fonction "prompt" saisie à partir du champs de formulaire
// conclusion: toutes les valeurs saisies seront stockées dans notre variable

// var prenom = prompt("Saisir votre prénom :");
// var age = prompt("Saisir votre âge :");

// // console.log(prenom,age);

// //2- vérification des valeurs
// if (isNaN(prenom) && !isNaN(age)) {
//     affichagePrenomAge(prenom, age); 
// }

// function affichagePrenomAge(val1, val2) {
//     var result = "Je m'appelle " + val1 + " et j'ai " + val2 + " ans.";
//     document.write(result);
// }



// EXERCICE
function phrase(prenomLogin,ageLogin) {
   

var prenomLogin = prompt("Quel est votre prénom ?");
var ageLogin = prompt("Quel est votre âge ?");

console.log(typeof prenomLogin);
console.log(typeof ageLogin);

if(!isNaN (ageLogin)) {
    document.write("<p> attention, veuillez saisir une valeur numérique </p>")
    console.log("ceci est un string");
} else {
    ageLogin = parseInt(ageLogin);
    console.log(typeof ageLogin);
}
document.write("J'ai " + ageLogin + " ans,")
// document.write("<p> J'ai " + ageLogin + " ans, </p>")

if(isNaN (prenomLogin)) {
    document.write("<p> désolée, votre saisi est incorrect, veuillez saisir votre prénom</p>")
    console.log("ceci est un number");
} else {
    console.log(typeof prenomLogin);
}
document.write("et je m'appelle " + prenomLogin + ".")
// document.write("<p> et je m'appelle " + prenomLogin + ". </p>")

document.write("<p> Je m'appelle " + prenomLogin + " et j'ai " + ageLogin + " ans.</p>")

}

// Function qui prend plusieurs paramètres et sans aucune valeur de retour
phrase();
