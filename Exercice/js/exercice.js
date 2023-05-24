
                        //-- SYNTAXE --//   

// -- La syntaxe d'une variable :

// déclarer une variable nommé (ex:booleanFalse)
// affecter une valeur de type (ex:boolean)
// et dont la valeur c'est (ex: true) 

                        
                        //-- CHAÎNE DE CARACTERE --//

// var prenom = "Cynthia";  // string / chaîne de caractère

// var monNumero = 65; // numérique / number

// var monNum = "0616223915"; // string / chaîne de caractère

//var nom = petitot;  // false / syntaxe fausse

// ligne 1 :
// le nom de la variable = prenom
// la valeur = Cynthia
// le type = string


                        //-- BOOLEAN --//

// var booleanFalse = false; // boolean faux

// var booleanTrue = true; // boolean vrai

// var varNull = null; // null


            //--  syntaxe pour afficher le contenu (= valeur) de nos variables --//

    // 3 types d'affichage: console.log, alert, document.write

// console.log permet l'affichage du contenu
// --- console.log(prenom);
// avec la fenêtre console, qui va afficher le contenu

// --- console.log(cynthia);
// un message d'erreur dans console : undefined 


            //-- ALERT (Boite de dialogue) --//

// --- alert(prenom);
// affiche une boite de dialogue avec le contenu de notre variable.
// = c'est un message qui s'affiche sur le navigateur à savoir Cynthia.

// --- alert("mon prénom est Cynthia");
// = c'est un message qui s'affiche sur le navigateur: mon prénom est Cynthia

// --- alert(cynthia);
// = aucune boite de dialogue ne s'affiche. Uniquement un message d'erreur dans console.

// --- window.alert("Super, tu es arrivé sur mon site !");
// windows est un objet, il n'est pas utile d'ajouter windows devant
// TOUT ELEMENT avant le point est un objet


            //-- DOCUMENT.WRITE (Navigateur) --//

// --- 6 document.write("A la pause vous aurez des Haribos Pik !");
// Affiche le contenu directement dans le navigateur


            //-- PROMPT (formulaire) --//

//  --- 7 prompt("Question: on est quel jour ?", "jour de la semaine");
// Une boite de dialogue s'affiche sous forme de formulaire.
// jour de la semaine est une réponse figé

// prompt("Question: on est quel jour ?");
// jour de la semaine
// prompt est une boite de dialogue avec un formulaire

// var jour = prompt("Question: on est quel jour ?", "jour de la semaine");

// var monPrenom = prompt();
// document.write(monPrenom);
// = Affiche une boite de dialogue avec un formulaire vide
// var monPrenom = prompt();   = cette syntaxe, stock l'information rempli par le client.
// document.write(monPrenom);  = L'objectif : voir la valeur que l'on a affectée
// = cette syntaxe affiche prompt (un formulaire) mais pas la valeur (donc vide)
// = sur le navigateur, quand on a fermé la boite de dialogue en faisant annulé, s'affiche null

// var monPrenom = prompt("cynthia");
// document.write(monPrenom);
// = la réponse indiqué par l'utilisateur dans la boite de dialogue, après avoir fait ok s'affiche sur le navigateur.

// --- 8
// sensible à la casse (majuscule, minuscule)
// pas d'accent, pas d'espace
// camel case = préférable pour nommer une variable
// une variable ne peut pas commencer par un chiffre
//  -- true


/*----------------------------------------
/ ~~~~~~   LES TYPES DE VARIABLES ~~~~~~ /
-----------------------------------------*/


// var unBooleen = false; // -- true
// console.log(unBooleen);
// console.log(typeof unBooleen);
// unBooleen = "true";
// quand on modifie une var pas besoin de redéclarer une autre var
// le dernier surcharge celui du dessus car js lis le code de haut en bas
// console.log(unBooleen);
// console.log(typeof unBooleen);


// CONSTANCE    
// const PAYS = "France";
// on ne peut le déclarer qu'une seule fois
// PAYS = "Italie";
// document.write(PAYS)

// utiliser les fonctions :
// parseFloat : converti en nombre décimal
// parseInt : converti en entier


// ---- Fonction & Objet ---- //
// TOUT ELEMENT avant le point est un objet
// TOUT ELEMENT suivi d'une parenthèse est une fonction. cette fonction est dans un objet.
// = avec ou sans paramètres (qui se trouve dans la parathèse)

var monPrenom = prompt("Quel est ton prénom?");
document.write(monPrenom);
console.log(monPrenom);
alert(monPrenom);

// prompt(); // 1
// c'est une fonction prédéfinie de js, qui prend ou pas des paramètres avec une valeur de retour
var monPrenom; //2
// j'ai déclaré une variable qui n'a pas de valeur
monPrenom = prompt(); // 3
// j'ai affecté la valeur de retour de prompt dans ma variable monPrenom
// 4 page web
document.write(monPrenom); //5
// c'est un objet avec une fonction qui a un paramètre
// = affiche le résultat mais n'a pas conservé le retour donc sans valeur de retour
console.log(monPrenom); //6
// c'est un objet avec une fonction qui a un paramètre
// = sans valeur de retour


// Fonctions

// Différents types de fonctions :
//  1 - une fonction avec au moins un paramètre sans valeur de retour
// ex : donne l'argent pour le sandwich -> achète le sandwich
// 2 - une fonction avec au moins un paramètre avec une valeur de retour
//  ex : donne l'argent pour acheter une baguette -> attend un retour (la baguette)
//  = quand il y a un retour, il faut de quoi le stocker (une variable)
// 3- une fonction sans paramètres avec une valeur de retour
// ex : le fils offre des fleurs
// 4- une fonction sans paramètres et sans une valeur de retour
// ex : Mitra lui dit d'aller au cinéma

