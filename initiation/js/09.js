//Créer un tableau
// var arr = new Array(element0, element1, ..., elementN);
// var arr = Array(element0, element1, ..., elementN);
// var arr = [element0, element1, ..., elementN];

// tableau (array) = un type de variable (tout comme boolean, string, number)
//  particularité : entre des crochets, séparé par des virgule

var fruits = ['Apple', 'Banana', 'orange'];
//  tableau indexé contenant 3 éléments qui sont des chaîne de caractères, type : array

var fruits2 = {
    0: 'Apple',
    1: 'Banana',
    'troisiemeFruit': 'orange'
};
//  tableau associatif / ON PEUT Ajouter d'autres caractères comme une chaîne de caractère (string)
// c'est nous qui déterminons les indexs de chaque élément
//  par rapport à un tableau indexé, ce sont les accolades qui le permettent, et non les crochets


console.log(fruits.length);
// .length est une propriété (fonctionne exactement comme une variable), il appel le nombre d'élément dans le tableau.t
//  = nombre d'éléments ou encore taille du tableau
// 2
// fruits. = désigne un objet car il est placé devant un point

//Accéder(via son index) à un élément du tableau
var first = fruits[0];
var second = fruits2[0];
var third = fruits2['troisiemeFruit'];
console.log(second);
console.log("La valeur du troisième élément : " +
third) 

console.log(first2);
// Apple
//  index = comme des variables
var last = fruits[fruits.length - 1];
// Banana

//Boucler sur un tableau
var couleurs = ['rouge', 'vert', 'bleu'];
// si on a une chaîne de caractère, les mettres dans une variable
//  c'est recommandé pour éviter de mettre des valeurs fixe
for (var i = 0; i < couleurs.length; i++) {
    console.log(couleurs[i]);
    // i=0 (0 = le numéro de l'index)
}

// AU LIEU DE CREER UN NOUVEAU TABLEAU ON MODIFIE LE CONTENU DU TABLEAU INITIALE

//Ajouter à la fin du tableau
// (à l'aide de la fonction push qui prend pour paramètre un élément
// et qui retourne la nouvelle taille du tableau)
var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]
//  il exécute (ajou)
//  il retourne une valeur que l'on stock dans la variable
//  cette valeur est la nouvelle longueur du tableau (un nombre) : 3
//  push fait 2 opérations : ajoute un élément à la fin du tableau, puis il retourne (la valeur de retour c'est fruit.length à savoir la taille du nouveau tableau : 3)
//  Voilà pourquoi le type de la variable est un number.
//  Si on avait écrit var fruit ça aurait été une var de type array
//  le type de la fonction push (il prend des paramètres)

//Supprimer le dernier élément du tableau
var last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];
//  fait 2 opérations : supprime et donne la valeur de retour ( à savoir le dernier élément supprimé : Banane)

//Supprimer le premier élément du tableau
var first = fruits.shift(); // supprime Apple (au début)
// ["Banana"];
//  fait 2 opérations : supprime et donne la valeur de retour ( à savoir le dernier élément supprimé : Apple)

//Ajouter au début du tableau
var newLength = fruits.unshift('Strawberry') // ajoute au début
// ["Strawberry", "Banana"];

fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

// Créer un tableau
//Trouver l'index d'un élément dans le tableau
var pos = fruits.indexOf('Banana');
// 1
//  c'est l'index des éléments dans un tableau

//Supprimer un élément par son index
var removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos
// ["Strawberry", "Mango"]
//  si on avait fait (pos, 2) , on supprime également l'élément suivant
// pos peut être un chiffre également
// removedItem 
//  La valeur de retour de splice ( ce sont les éléments supprimés en forme de tableau (de type : array object))

//Supprimer des éléments à partir d'un index
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
// C'est une variable qui contient un tableau avec 2 éléments
// Type de variable "array" ou "objet"
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1, n = 2;
var removedItems = vegetables.splice(pos, n);
// n définit le nombre d'éléments à supprimer,
// à partir de la position pos
// valeur de retour : la copie du tableau

console.log(vegetables);
// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

console.log(removedItems);
// ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés)

//Copier un tableau
var shallowCopy = fruits.slice(); // crée un nouveau tableau qui contient les éléments de fruits
// ["Strawberry", "Mango"]


// TEST 

var couleurs = ['rouge', 'vert', 'bleu'];
for (var w = 0; w < couleurs.length; w++) {
    console.log(couleurs[w]);
    document.write("<p>" + couleurs[w] + "</p>");
}

//Affichage à partir du dernier élément
for (var w = 2; w >= 0; w--) {
    console.log(couleurs[w]);
    document.write("<p>" + couleurs[w] + "</p>");
}

// Les 5 opérations pour une boucles

var k = 0; /*déclaration et affectation*/
while (k < couleurs.lenght) /*condition*/ {
    document.write("<p>" + couleurs[k] + "</p>"); /*éxécution*/
    k++; /*incrémentation*/
}


// EXERCICES

var fruits = ['Apple', 'Banana'];
var prenom = ['Nawal', 'Wassila', 'Rahim', 'Jérémy', 'Narcis', 'Karima', 'Faïssal', 'Alin', 'Oliver', 'Cynthia', 'Alexis', 'Michel', 'Mitra'];
console.log(fruits.length);
// 2
console.log(prenom.length);

var fruits = ['Apple', 'Banana', 'Orange'];
var fruits2 = {
    0: 'Apple',
    1: 'Banana',
    'troisemeFruit': 'orange'
}

var prenom = ['Nawal', 'Wassila', 'Rahim', 'Jérémy', 'Narcis', 'Karima', 'Faïssal', 'Alin', 'Oliver', 'Cynthia', 'Alexis', 'Michel', 'Mitra'];
console.log(fruits.length);
// 3
console.log(prenom.length);
//Accéder(via son index) à un élément du tableau
var first = fruits[0];
var second = fruits2[0];
var third = fruits2['troisemeFruit'];
console.log(second);
// console.log("La valeur du troisième élément :" + var couleurs = ['rouge', 'vert', 'bleu'];
for (var w = 0; w < couleurs.length; w++) {
    console.log(couleurs[w]);
    document.write("<p>" + couleurs[w] + "</p>");
}

//Affichage à partir du dernier élément
for (var w = 2; w >= 0; w--) {
    console.log(couleurs[w]);
    document.write("<p>" + couleurs[w] + "</p>");
}


// MODIFIER LE TABLEAU

console.log(fruits);
//Ajouter à la fin du tableau
var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]

var lastElement = fruits.pop();

console.log('Tableau fruits après avoir supprimé le dernier élement : ' + fruits);
console.log('La taille finale du tableau : ' + fruits.length);
console.log(typeof fruits);
console.log('La valeur du dernier élement supprimé : ' + lastElement);