
                            
                            
                            // ---- LES BOUCLES ---- //


        // --- Permet :
//  - de répéter des actions simplement et rapidement
//  - avec quelques lignes de code d'afficher autant de données que l’on souhaite.


        // --- Différentes types de boucles FOR et WHILE

//  Les 5 opérations : 
// - Déclaration d'une variable et affectation d'une valeur
// - Conditions 
// - Exécution 
// - Incrémentation

// var k = 0; /*déclaration et affectation*/
// while (k < couleurs.lenght) /*condition*/ {
//     document.write("<p>" + couleurs[k] + "</p>"); /*éxécution*/
//     k++; /*incrémentation*/
// }



// fruits.length 
// .length 
//  = une propriété
//  = nombre d'éléments dans un tableau
//  fruits. = désigne un objet car il est placé devant un point

// MODIFICATION D'UN TABLEAU

// Lors d'un AJOUTE d'élément avec PUSH et UNSHIFT, 2 opérations se font :
// - chacun ajoute (au niveau de la première ou dernière ligne du tableau)
// - est une fonction qui peut contenir un paramètre avec un ou plusieurs éléments
// - retourne une valeur qui est la nouvelle longueur du tableau
// - par conséquent, la variable sera bien de type number

// fruits.push('Mango'); // Quel intérêt ?????

// Lors d'un SUPPRESSION d'élément avec POP et SHIFT, 2 opérations se font :
// - chacun supprime (la première ou dernière ligne du tableau)
// - est une fonction qui ne contient aucun élément
// - retourne une valeur l'élément supprimé
// - par conséquent, la variable sera bien de type string

var trousse = ['stylos', 'feutre'];
console.log(trousse.length);
// document.write(trousse.length);
// document.write(trousse);
console.log(trousse[1]);
console.log(typeof trousse);

var newLength = trousse.push('gomme', 'crayon');
console.log(trousse.length);
console.log(trousse);
console.log(typeof trousse);
console.log(typeof newLength);

var last = trousse.pop();
console.log(trousse.length);
console.log(trousse);
console.log(typeof trousse);
console.log(typeof newLength);
console.log(last);

var first = trousse.shift();
console.log(trousse.length);
console.log(trousse);
console.log(first);
console.log(typeof first);

var newLength = trousse.unshift('ciseaux');
console.log(trousse.length);
console.log(trousse);
console.log(newLength);
console.log(typeof newLength);

trousse.push('stylos','crayon');
console.log(trousse);
console.log(newLength); // toujours 3, car on ne l'a pas stocker dans une variable

var pos = trousse.indexOf('feutre');
console.log(pos);
// Pour afficher le numéro de l'index

// var newLength = trousse.push('stylos','crayon');
// console.log(trousse);
// console.log(newLength);

// var indexTrousse = trousse.indexOf('crayon');
// console.log(indexTrousse);
// console.log(trousse);










var trousse2 = {
        0: 'stylos',
        1: 'feutre',
        3: 'gomme'
};



