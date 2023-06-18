
// **********************  ENONNCE - 1 (random et floor) *******************//


// 1/ Déclarer 2 variables de type tableau,
// le premier : prenom
// le deuxième : adjectif

// 2/ à partir d'un formulaire, remplir le premier.
// Tant que les 12 prénoms n'ont pas été saisi, le formulaire s'affiche.
// Idem pour le deuxième avec 12 adjectifs.

// 3/ Déclarer une fonction qui prend 2 paramètres de type tableau,
// qui retourne 1 tableau.




// -------------------- Exercices - 1 (1ère partie)--------------------- //


var prenom = [];
var adjectif = [];

// var prenom = prompt("Saisissez 12 prénoms","prénom");
// var adjectif = prompt("Saisissez 12 adjectifs","adjectif");

// Remplir un tableau avec la fonction push

var prenom2;

while (prenom.length <= 12){
    prenom2 = prompt("Saisissez 12 prénoms","prénom");
    prenom.push(prenom2);
}

document.write(prenom);


var adjectif2;

while (adjectif.length <= 12){
    // .length est une propriété ou attribut
    adjectif2 = prompt("Saisissez 12 adjectifs","adjectif");
    // adjectif2 : récupère dans une variable, ce que l'on a saisi dans le formulaire. Prend la valeur de notre form
    adjectif.push(adjectif2); 
    // nom du tableau .push pour remplir le tableau
}

document.write(adjectif);


// ---------------------- Test & Explication----------------------- //

// document.write(Math.floor(Math.random() * 12));

// Lien : https://statics.teams.cdn.office.net/evergreen-assets/safelinks/1/atp-safelinks.html

// Lien : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random 

// Lien :  https://www.w3schools.com/js/js_random.asp



// Random : donne une valeur de retour entre 0 et 1 ouvert (à savoir 0,9999...) autre syntaxe [0 à 1[   :  Math.random()

// FLOOR : Permet de générer un chiffre entier. Arrondi au chiffre le plus bas  :  Math.floor()

// 1er façon
var rand = Math.random();
var rand10 = rand*10;
document.write(Math.floor(Math.random() * 10));


// 2ème façon
// var rand = Math.random();
// var rand10 = Math.floor(rand*10);
// document.write(rand10);


// SYNTAXE avec random (multiplié par 10) et floor

var ChiffreRand = Math.random();  // décimal
// Génère un chiffre décimal aléatoire entre 0 fermé et 1 ouvert (donc 0,99...).

ChiffreRand = ChiffreRand*10;  // décimal
// Génère un chiffre décimal aléatoire entre 0 fermé et 10 ouvert.

ChiffreRand = Math.floor(ChiffreRand);  // entier
// Génère un chiffre entier entre 0 fermé et 9(max) fermé mais pas de 10 ouvert.
// floor : enlève les chiffres après la virgule

document.write(ChiffreRand);



// SYNTAXE avec random (multiplié par 19.5) et floor 

var ChiffreRand = Math.random();
// Génère un chiffre décimal aléatoire entre 0 fermé et 1 ouvert (donc 0,99...).

ChiffreRand = ChiffreRand*19.5;
// Génère un chiffre décimal aléatoire entre 0 fermé et 19.5 ouvert (donc 19,49...).

ChiffreRand = Math.floor(ChiffreRand);
// Génère un chiffre entier entre 0 fermé et 19(max) fermé mais pas de 10 ouvert.
// floor : enlève les chiffres après la virgule.

document.write(ChiffreRand);



// SYNTAXE avec random (multiplié par 0.12) et floor 

var ChiffreRand = Math.random();
// Génère un chiffre décimal aléatoire entre 0 fermé et 1 ouvert (donc 0,99...).

ChiffreRand = ChiffreRand*0.12;
// Génère un chiffre décimal aléatoire entre 0 fermé et 0.12 ouvert (donc 0,119...).

ChiffreRand = Math.floor(ChiffreRand);
// Génère un chiffre entier de 0 fermé.
// floor : enlève les chiffres après la virgule.

document.write(ChiffreRand);


// ---------------------- Exercices - 1 (2ème partie)----------------------- //

// 1 - Attribuer un prénom aléatoirement associé à un chiffre aléatoire

var prenom = ["Nawal","Wassila","Rahim","Jérémy","Narcis","Karima","Faissal","Alin","Oliver","Cynthia","Alexis","Michel"];

var ChiffreRand = Math.random();
ChiffreRand = ChiffreRand*10;
ChiffreRand = Math.floor(ChiffreRand);

resultat = (prenom[5]) + ChiffreRand
// document.write(ChiffreRand);
document.write(resultat);

// 1ère Manière (Cynthia et Karima)
resultat = (prenom[5]) + " " + ChiffreRand; 
// affiche le prénom associé à l'index du tableau avec un numéro aléatoire.

//resultat = (prenom[ChiffreRand]); // retester

resultat = (prenom[ChiffreRand]) + " " + ChiffreRand;
document.write(resultat);
// affiche un prénom aléatoire du tableau avec un numéro aléatoire.

// Autre manière (Mitra)
// var result = prenoms[chiffreRand];
// document.write(ChiffreRand+ " " + result);
// affiche un prénom aléatoire du tableau avec un numéro aléatoire.


// ---------------------- Exercices - 1 (3ème partie)----------------------- //

// 1 - Attribuer un prénom aléatoirement associé à un adjectif aléatoire


var prenom = ["Nawal","Wassila","Rahim","Jérémy","Narcis","Karima","Faissal","Alin","Oliver","Cynthia","Alexis","Michel"];

var adjectif = ["perspicace","intelligent(e)","curieux(se)","cool","agréable","sérieu(se)","joviale","timide","colérique","encourageant(e)","narcissique","fiable"];

var ChiffreRand = Math.random();
ChiffreRand = ChiffreRand*12;
ChiffreRand = Math.floor(ChiffreRand);

resultat = (prenom[ChiffreRand]) + " " + ChiffreRand + "<br>";
document.write(resultat);

result = (prenom[ChiffreRand]) + " " + (adjectif[ChiffreRand]);
document.write(result);