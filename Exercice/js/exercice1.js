
// CONSIGNE

// 1.	Affichage d’une boite de dialogue avec une case de formulaire vide
// 2.	Déclarer une variable nb1
// 3.	Affecter le contenu du formulaire dans cette variable 
// 4.	Saisir un entier dans le formulaire (sachant que quel que soit la valeur saisie dans le formulaire est de type string)
// 5.	Déclarer une variable qui s’appelle nb2 et affecter le chiffre 7 à cette variable
// 6.	Calculer le modulo de nb1 par nb2 
// 7.	Affichage du résultat sur la page web
// 8.	Affichage du résultat sur la console
// 9.	Affichage du résultat à partir d’une boîte de dialogue


// prompt();
var nb1 = prompt("Saisir un entier dans le formulaire");
var nb2 = 7;
var resultat = nb1 % nb2;

document.write(resultat);
console.log(resultat);
alert(resultat);
console.log(typeof resultat);

resultat = resultat.toString();
console.log(resultat);
console.log(typeof resultat);

