//----------------- LES VARIABLES -----------------//


var prenom = "Cynthia";  // string / chaîne de caractère

var monNumero = 65; // numérique / number

var monNum = "0616223915"; // string / chaîne de caractère

var nom = petitot;  // false / syntaxe fausse

var booleanFalse = false; // boolean faux

var booleanTrue = true; // boolean vrai

// var varNull = null; // null


//----------------- CALCUL -----------------//


//----------------- BOUCLE -----------------//

var k = 0; /*déclaration et affectation*/
while (k < couleurs.lenght) /*condition*/ {
    document.write("<p>" + couleurs[k] + "</p>"); /*éxécution*/
    k++; /*incrémentation*/
}

//   -----------------------------------------------------------------------------//

function additionDesChiffres(paramNum, paramString, paramArray) {
    for (var i = 0; i <= paramNum; i++) {
      paramArray.push(i);
    }
    var result = [paramString, paramArray];
    return result;
  }
  
  // var valeurRetour = additionDesChiffres(15, "Le résultat de notre fonction : ", []);
  
  var num = 15;
  var chaineCaractere = "Le résultat de notre fonction : ";
  var tab = [];
  var valeurRetour = additionDesChiffres(num, chaineCaractere, tab);
  
  document.write(valeurRetour);

//   -----------------------------------------------------------------------------//


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
