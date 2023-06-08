
// var trousse = ['stylos','feutre','gomme','crayon', 'ciseaux'];

// function diabolique (materiel){

// }

// diabolique(trousse);


// *********************  ENONNCE ******************//

// Un programme en js :

// 1- Implanter une fonction qui s'appelle "diabolique" qui prend un paramètre "quelconque"

// 2- La fonction aura une valeur de retour de type tableau.

// 3- le tableau déclaré dans la fonction sera rempli par les différent paramètres donnés 

// 4- nous allons executer la fonction 4 fois en lui passant les 4 type de variables : type tableau, string, number, boolean

// 5- nous allons stocker la valeur de retour dans une variable "result"

// 6- nous allons afficher la valeur de retour sur une page web et aussi à partir de la console 

// let ou var
//  fonction entité à part



// *********************  ENNONCE - 2 ******************//

// Un programme en js :

// 1- Implanter une fonction qui s'appelle "affichagePrenoms2" qui prend deux paramètres de type tableau(remplis de 12 prénoms) et string successivement
// 2- La fonction doit retourner un tableau qui contient deux éléments, le premier sera paramètre tableau, deuxième sera la chaîne de caractère

// 3- nous allons afficher le résultat à partir de la console




// ---------------------- Exercices - 2 ----------------------- //

var developpeurs = [
    "Alexis",
  
    "Alin",
  
    "Cynthia",
  
    "Faïssal",
  
    "Jérémy",
  
    "Karima",
  
    "Michel",
  
    "Narcis",
  
    "Nawal",
  
    "Oliver",
  
    "Rahim",
  
    "Wassila",
  ];
  
  function affichagePrenoms2(paramArray, paramString) {
    // les éléments du paramètre doivent-être utilisés à l'intérieur de la fonction
    var resultat = [paramArray, paramString, 156];
    // Nous avons déclaré la variable resultat (ici le type tableau) qui contient les paramètres utilisés par la fonction "affichagePrenoms2" et nous envoyons cette variable grâce au mot clé "return"
    return resultat;
    //Attention : on n'ajoute aucune syntaxe après la syntaxe "return", car elles ne seront pas executées(autrement dit elles ne seront pas prises en compte)
  }
  
  // la syntaxe suivante fait deux opérations distinctes :
  // 1 - Exécution de la fonction "affichagePrenoms2"
  // 2- Stockage de la valeur de retour de notre fonction grâce au mot clé "return" utilisé à la fin de la fonction
  // 3- Donc la variable "resultatDeLaFonction" a été créée afin de stocker la valeur de retour de notre fonction
  var resultatDeLaFonction = affichagePrenoms2(developpeurs,"Mes développeurs sont géniaux");

  console.log(resultatDeLaFonction);

var tabEnfant = ["Alexis", "Wassila"];
// Les deux syntaxes suivantes sont identiques, avec une différence significative: la première contient un tableau statique et la deuxième qui est bien appréciée contient un élément dynamique
//var tabFamille = [["Alexis", "Wassila"], "Mitra"];
var tabFamille = [tabEnfant, "Mitra"];


  