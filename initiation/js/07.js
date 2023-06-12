// alert('test');

/*
L'opérateur ET : && ou AND
*/
// -- Si je cumule 2 conditions :
// => prenom === prenomLogin
// => monAge === ageLogin
// pour que les 2 correspondent pour être validés il faut les associer
if ( (prenomLogin === prenom) && (ageLogin === monAge) ) {
    /* ... code ... */
    /* je ne rentre ici que si les 2 conditions sont vraies */
}
if ((A) && (B)){...}
// 2 conditions obligatoires (les 2 doivent être vrai)
=> si A est FAUX et B est VRAI => FAUX
=> si A est VRAI et B est FAUX => FAUX
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => VRAI

/*
L'opérateur OU : || ou OR (| pipe => alt gr + 6)
*/
if ( (C) || (D) ){...}
// remplir au moins une des deux conditions (obligatoires)
=> si C est FAUX et D est FAUX => FAUX
=> si C est FAUX et D est VRAI => VRAI
=> si C est VRAI et D est FAUX => VRAI
=> si C est VRAI et D est VRAI => VRAI

/*
L'opérateur "!" signifie : le contraire de
*/
var utilisateurLog = true;
//  "!" = s'il n'est pas
if(!utilisateurLog){
    //si l'utilisateur n'est pas loggé.
}
// ce qui revient à écrire :
if (utilisateurLog == false) {
    //si l'utilisateur n'est pas loggé.
}

// EXEMPLE

var num1 = 2;
var num2 = 5;
if ((num1 + num2)==7){ // true
    // si c'est égal à 7
    console.log(`le résultat est correct`);
}

if (!((num1 + num2)!=7)){ // true
    // " ! " si ce n'est pas égal à 7 , inverse la condition
    // ex : s'il ne fait pas beau, on ne va pas à disney
    // faux + faux = vrai
    console.log(`le résultat est correct`);
}


if(true){
    console.log(`La condition est vrai`);
}

if(!(!true)){
    // pareil que (true) tout seul
    // la syntaxe "!true" signifie : l'opposé de 'true', qui donne le résultat "false", on peut donc résumer la syntaxe suivante "!(false)".
    // Au finale on peut arriver au résultat suivant "! (false) = true".
    // Dans ce cas, nous avons le droit d'entrer dans la condition et éxécuter les codes qui se trouvent dans la condition
    console.log(`La condition est vrai`);
}

if(!true){
    // false car opposé de true c'est false
    // la syntaxe "!true" signifie : l'opposé de 'true', qui donne le résultat "false", on peut donc résumer la syntaxe suivante "!(false)".
    
    console.log(`La condition est fausse`);
}

// * ---- Test avec Mitra et Michel ---- *//

// L'opérateur ET : && ou AND
// */

// -- Si je cumule 2 conditions :
// => prenom === prenomLogin
// => monAge === ageLogin

var unString = "12";
var unNumber = 12;

// pour que les 2 correspondent pour être validés il faut les associer

if ( unString == unNumber) {
    console.log("c'est vrai");
}

if (unString === unNumber) {
    /* ... code ... */
    /* je ne rentre ici que si les 2 conditions sont vraies */
}

if ( (prenomLogin === prenom) && (ageLogin === monAge) ) {
    /* ... code ... */
    /* je ne rentre ici que si les 2 conditions sont vraies */
}


