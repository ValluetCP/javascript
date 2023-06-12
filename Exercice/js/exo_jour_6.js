
// *************************  ENONNCE - 1 **********************//


// 1/ Déclarer 2 variables de type tableau,
// le premier : prenom
// le deuxième : adjectif

// 2/ à partir d'un formulaire, remplir le premier.
// Tant que les 12 prénoms n'ont pas été saisi, le formulaire s'affiche.
// Idem pour le deuxième avec 12 adjectifs.

// 3/ Déclarer une fonction qui prend 2 paramètres de type tableau,
// qui retourne 1 tableau.




// ---------------------- Exercices - 1 ----------------------- //


// var prenom = [];
// var adjectif = [];

// // var prenom = prompt("Saisissez 12 prénoms","prénom");
// // var adjectif = prompt("Saisissez 12 adjectifs","adjectif");

// // Remplir un tableau avec la fonction push

// var prenom2;

// while (prenom.length <= 12){
//     prenom2 = prompt("Saisissez 12 prénoms","prénom");
//     prenom.push(prenom2);
// }

// document.write(prenom);


// var adjectif2;

// while (adjectif.length <= 12){
//     // .length est une propriété ou attribut
//     adjectif2 = prompt("Saisissez 12 adjectifs","adjectif");
//     // adjectif2 : récupère dans une variable, ce que l'on a saisi dans le formulaire. Prend la valeur de notre form
//     adjectif.push(adjectif2); 
//     // nom du tableau .push pour remplir le tableau
// }

// document.write(adjectif);

// ------------------- Test de compréhension -------------------- //

var trousse = ["crayon", "stylos"]
var stockLength;

while (trousse.length >= 4){
    stockLength = prompt("remplir la trousse");
    trousse.push(stockLength);
}

document.write(trousse);


// ------------------- Ne pas tenir compte -------------------- //

// while (adjectif < 12){
//     var adjectif = prompt("Saisissez 12 adjectifs","adjectif");
// }

// function afficheTableau (lePrenom, lAdjectif){

//     while (prenom.length < 12){
//         var prenom = prompt("Saisissez 12 prénoms","prénom");
//     }
    
//     while (adjectif < 12){
//         var adjectif = prompt("Saisissez 12 adjectifs","adjectif");
//     }

//     resultat = [lePrenom, lAdjectif];
//     return resultat;
// }

// var valeurRetour = afficheTableau(prenom, adjectif);