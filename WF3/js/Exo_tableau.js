
// *************************  ENONNCE - 1 **********************//

//  Exercice
// soit le tableau: ["bannane", "pomme", "mangue"]
// ajouter une fraise entre pomme et mangue
// supprimer la bannane
// remplacer fraise et mangue par goyave



// ---------------------- Exercices - 1 ----------------------- //

var tableau = ["banane","pomme","mangue"];
tableau.splice(2,0,"fraise");
console.log(tableau);

tableau.shift();
console.log(tableau);

// tableau[0]="goyave";
// tableau[2]="goyave";
// console.log(tableau);

tableau.fill("goyave");
console.log(tableau);


