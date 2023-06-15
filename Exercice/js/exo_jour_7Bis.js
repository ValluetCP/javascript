
// **********************  ÉNONCÉ - 1 *******************//

// 1- Déclarer une fonction "fillArray" qui prend en paramètre un entier "num"
// 2- dans la fonction :
// 	a/Déclarer une variable de type un tableau "addElement" 
//  b/Dans une boucle "for", utiliser une boîte dialogue afin de saisir des données (nombre de l'affichage de la boîte de dialogue dépend du nombre qui      vient du paramètre utilisé dans la fonction)
//  c/ Les données saisies à partir de la boîte de dialogue seront stockées dans le tableau "addElement" 



// -------------- Exercices - 1 (1ère partie) --------------- //

// function fillArray(num){
//     var addElement = [];

//     var elem;

//     for (var i = 0; i < num; i++){

        
//     }

// }



// -------- Exercices - 1 (1ère partie) CORRECTION COLLECTIVE--------- //


// 1- Déclarer une fonction "fillArray" qui prend en paramètre un entier "num" et elle retourne un tableau "addElement"
// 2- dans la fonction :

function fillArray(num) {
    // a/Déclarer une variable de type tableau "addElement"
    var addElement = [];
    // b/ Déclarer une variable "elem"
    var elem;
    // c/Dans une boucle "for", utiliser une boîte dialogue afin de saisir des données, nous allons stocker la valeur de retour dans la variable "elem" (nombre de l'affichage de la boîte de dialogue dépend du nombre qui vient du paramètre utilisé dans la fonction)
    //   d/ Les données saisies à partir de la boîte de dialogue seront stockées dans le tableau "addElement"
    for (var i = 0; i < num; i++) {
      elem = prompt("Saisir de données !");
      addElement.push(elem);
    }
  
    return addElement;
  }
  
  
  
 // execution de la fonction :
  var nombre = prompt("Insérez le nombre d'élément de votre array : ");
  var fruits = fillArray(nombre);
  console.log(fruits);

  