// *************************  ENONNCE - 1 **********************//


// Jour Suivant
// Ecrivez un programme jour_suivant.js qui fait saisir un nom de jour de la semaine à l'utilisateur, puis affiche le nom du jour suivant.

// Les erreurs de saisie (jour incorrect) doivent être gérées.

// Effectuez l'exercice avec des if/if else puis avec un switch.


// ---------------------- Exercices - 1 ----------------------- //

var date_du_jour, jour_suivant;
date_du_jour = "mercredi";
jour_suivant = "jeudi";



// --- if et else--- //

// var saisi_du_jour = prompt("Quel jour de la semaine sommes-nous?");

// if (saisi_du_jour === date_du_jour){
//     document.write("Demain nous serons jeudi");
// } 
// else {
//     document.write("Erreur sur la date du jour");
// }



// --- if et else if et else--- //

// var saisi_du_jour = prompt("Quel jour de la semaine sommes-nous?");

// if (saisi_du_jour === date_du_jour){
//     document.write("Demain nous serons jeudi");
// } 
// else if (saisi_du_jour === jour_suivant){
//     document.write("Désolée, nous ne sommes pas encore jeudi");
// }
// else {
//     document.write("Erreur sur la date du jour ");
// }



// --- Switch --- //

// var jour_semaine = "mercredi";
var jour_semaine = prompt("Quel jour de la semaine sommes-nous?");
// Convertir en minuscule
jour_semaine = jour_semaine.toLowerCase();



switch(jour_semaine){
    case"lundi":
    document.write("Demain nous serons mardi");
    break;
    case"mardi":
    document.write("Demain nous serons mercredi");
    break;
    case"mercredi":
    document.write("Demain nous serons jeudi");
    break;
    case"jeudi":
    document.write("Demain nous serons vendredi");
    break;
    case"vendredi":
    document.write("Demain nous serons samedi");
    break;
    case"samedi":
    document.write("Demain nous serons dimanche");
    break;
    case"dimanche":
    document.write("Demain nous serons lundi");
    break;
    // default : dans le cas où nous ne remplissons aucune de ces conditions
    default: 
    document.write("Veuillez saisir un jour de la semaine");
}

// toLowerCase()
// toUpperCase()
// Lien : https://www.aliasdmc.fr/coursjavas/cours_javascript603.html#:~:text=Minuscule%20%2F%20Majuscule&text=Il%20est%20possible%20de%20mettre,majuscules%20de%20l'objet%20String.



// ---------------------- Correction - (Alexis) ----------------------- //


// var dayif = prompt("ecrire un jour de la semain", "lundi");
// while (Number(dayif)) {
//     dayif = prompt("ecrire un jour de la semain", "lundi");
// }
// if (dayif == "lundi"){
//     document.write("demain nous seron mardi");
// }else if (dayif == "mardi"){
//     document.write("demain nous seron mercredi");
// }else if (dayif == "mardi"){
//     document.write("demain nous seron jeudi");
// }else if (dayif == "mardi"){
//     document.write("demain nous seron vendredi");
// }else if (dayif == "mardi"){
//     document.write("demain nous seron samedi");
// }else if (dayif == "mardi"){
//     document.write("demain nous seron dimanche");
// }else if (dayif == "mardi"){
//     document.write("demain nous seron lundi");
// }

