// **********************  ENONCE - 1 *******************//

// Voir fichier : 10_nb_jours.html

// ------------ Exercices - 1 (1ère partie)------------- //

var mois = prompt("Saisissez un mois");
mois = mois.toLocaleUpperCase();

switch(mois){
    case"janvier":
    document.write("le mois de janvier contient 31 jours");
    break;
    case"février":
    document.write("le mois de janvier contient 28 jours");
    break;
    case"mars":
    document.write("le mois de janvier contient 31 jours");
    break;
    case"avril":
    document.write("le mois de janvier contient 30 jours");
    break;
    case"mai":
    document.write("le mois de janvier contient 31 jours");
    break;
    case"juin":
    document.write("le mois de janvier contient 30 jours");
    break;
    case"juillet":
    document.write("le mois de janvier contient 31 jours");
    break;
    case"août":
    document.write("le mois de janvier contient 31 jours");
    break;
    case"septembre":
    document.write("le mois de janvier contient 30 jours");
    break;
    case"octobre":
    document.write("le mois de janvier contient 31 jours");
    break;
    case"novembre":
    document.write("le mois de janvier contient 30 jours");
    break;
    case"décembre":
    document.write("le mois de janvier contient 31 jours");
    break;
    default:
        document.write("Veuillez saisir un mois");
}