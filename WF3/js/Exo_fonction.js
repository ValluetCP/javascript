
// *************************  ENONCE - 1 **********************//

/* ecrire une fonction maxMin qui prend trois paramètresles deux premiers sont des nombres (a et b)le troisième un boolean (c)par défaut le troisieme parametre (c = true)

● si le paramètre c = true la fonction retourne le maximum entre a et b

● si le paramètre c = false la fonction retourne le minimum entre a et b
exemple:
maxMin(2, 5, true) => 5
maxMin(2, 5, false) => 2*/

// ---------------------- Exercices - 1 ----------------------- //

// function maxMin(a, b, c = true){

//     if ((c == true) && (a > b)){
//         console.log(a);
//         return a;
//     }
//     else if((c == true) && (b > a)){
//         console.log(b);
//         return b;
//     }
    
//     else if ((c == false) && (a > b)){
//         console.log(b);
//         return b;
//     }

//     else if ((c == false) && (b > a)){
//         console.log(a);
//         return a;
//     }
        
// }

// var resultat = maxMin(14, 28, true);
// var resultat2 = maxMin(14, 28, false);


// ---------------------- Correction - 1 ----------------------- //

// function maxMin(a, b, c = true) {
//     if (c == true) { // si c == true
//     if (a > b) { // si a plus grand que b
//     return a; // on retourne a
//     } else { // sinon
//     return b; // on retourne b
//     }
//     } 
//     else { // si c = false
//     if (a < b) { // si a est plus petit que b
//     return a; // on retourne a
//     } else { // sinon
//     return b; // on retourne b
//     }
//     }
//    }
//    let resultat = maxMin(3, 8, true);
//    console.log(resultat);
    
//    // on retourne a si (c = true et a > b) ou (c = false et a < b)
//    // on retourne b si (c = true et a < b) ou (c = false et a > b)
//    function maxMin(a, b, c = true) {
//     if (((c == true) && (a > b)) || ((c == false) && (a < b))) {
//     return a;
//     } else if (((c == true) && (a < b)) || ((c == false) && (a > b))) {
//     return b;
//     }
//    }
    
//    let result = maxMin(3, 8, false);
//    console.log(result);


   // *************************  ENONCE - 2 **********************//

   /*ecrire une fonction sommeTab qui prend en paramètre un tableau composé de nombres.
   la fonction doit retourner la somme des éléments du tableauexemple:sommeTab([1,6,9]) => 16*/


   // ---------------------- Exercices - 2 ----------------------- //

   
   // let tableau = [1,6,9];
   let tableau = [6,8,9,1,3,0];
   let somme = 0;

   function someTab (nombre){
        for (let i = 0; i < tableau.length; i++)
        nombre = somme += tableau[i];
        console.log(nombre);

    return somme;
   }

   let resultat2 = someTab(tableau);
   console.log(resultat2);

// ---------------------- Correction - 2 ----------------------- //

function someTab(tableau) { // fonction someTab prend un parametre
   let somme = 0; // initialisation de la variable somme à 0
   let i = 0; // initialisation de la variable i à 0
   //  0 correspond a la premiere position du tableau
   while (i < tableau.length) { // tant que i est plus petit que la taille du tableau
       // on ajoute la valeur de la position i du tableau a la variable somme
       somme = tableau[i] + somme;
       i++; // incrementer i
       // somme += tableau[i];
   }
   // a la fin de la boucle on retourne la somme
   return somme;
}



let tab = [1, 2, 8, 5, 6];
let resultat3 = someTab(tab);
console.log(resultat3); // => affiche 22



// eviter cette mauvaise maniere
// let resultat3 = someTab([1, 6, 9]); // => 16 


// *************************  ENONCE - 3 **********************//

/*
   ecrire une fonction maxTab qui prend en paramètre un tableau composé de nombres.
   La fonction devra retourner le plus grand nombre du tableau
   exemple:
   maxTab([2, 7, 4, 0]) => 7   */


// ---------------------- Exercices - 3 ----------------------- //

var tab3 = [2, 7, 4, 0];
console.log(tab3.sort());

var dernierElement = tab3[tab3.length-1];
// console.log(dernierElement);

function maxTab(tableau){
   tableau.sort();
   var dernierElement = tableau[tableau.length-1];
   return dernierElement;
}

var res = maxTab(tab3);


// ---------------------- Correction - 3 ----------------------- //

function maxTab(tableau) {
   let max = tableau[0]; // on considere le premier elemement comme etant le plus grand
   for (let i = 0; i < tableau.length; i++){ // pour i allant de 0 a la taille du tableau
       // comparer max de la valeur a la position i du tableau
       if (max < tableau[i]) {  // si max est plus petit
           // on remplace la valeur de max par la valeur de la position i du tableau
           max = tableau[i]; 
       }
   }
   return max; // retourner max
}



let tab1 = [5, 8, 3, 0];
let resultat5 = maxTab(tab1);
console.log(resultat5); // affiche => 8


// *************************  ENONCE - 4 **********************//

/*
   ecrire une fonction minTab qui prend en paramètre un tableau composé de nombres
   la fonction devra retourner le plus petit nombre du tableau
   exemple:
   minTab([2, 7, 4, 0]) => 0  */

// ---------------------- Exercices - 4 ----------------------- //

function maxTab(tableau) {
   let min = tableau[0];

   for (let i = 0; i < tableau.length; i++){ 

       if (min > tableau[i]) { 
           min = tableau[i]; 
       }
   }
   return max; 
}

let tab2 = [5, 8, 3, 0];
let resultat6 = maxTab(tab1);
console.log(resultat6);


// --------------- 1 - Exercice de révision ---------------- //

   // exercice de révision

// let somme1 = 0; // la variable somme vaut 0 au depart

// for (let i = 1; i <= 5; i++){
//     // console.log(i);
//     somme1 = somme1 + i;
//     // somme += i;
// }

// console.log(somme1);

// // iteration 1:
//     // somme = 0
//     // i = 1
//     // fin iteration 1:
//         // somme = 1
//         // i = 2
// // iteration 2:
//     // somme = 1
//     // i = 2
//     // fin iteration 2
//         // somme = 3
//         // i = 3
// // iteration 3:
//     // somme = 3
//     // i = 3
//     // fin iteration 3
//         // somme = 6
//         // i = 4
// // iteration 4:
//     // somme = 6
//     // i = 4
//     // fin iteration 4
//         // somme = 10
//         // i = 5
// // iteration 5:
//     // somme = 10
//     // i = 5
//     // fin iteration 5
//         // somme = 15
//         // i = 6



// --------------- 2 - Exercice de révision ---------------- //

let num = 1; // variable num qui contient la valeur 1
do { // faire:
    if (num % 2 === 0) { // si num est divisible par 2 (a savoir un nombre pair)
        console.log(num); // afficher num
    }
    num++; //incrementer num
} while (num <= 20); // tant que num est inferieur ou egale a 20



// --------------- 3 - Exercice de révision ---------------- //

function someTab(tableau) { // fonction someTab prend un parametre
   let somme = 0; // initialisation de la variable somme à 0
   let i = 0; // initialisation de la variable i à 0
   //  0 correspond a la premiere position du tableau
   while (i < tableau.length) { // tant que i est plus petit que la taille du tableau
       // on ajoute la valeur de la position i du tableau a la variable somme
       somme = tableau[i] + somme;
       i++; // incrementer i
       // somme += tableau[i];
   }
   // a la fin de la boucle on retourne la somme
   return somme;
}



let tab4 = [1, 2, 8, 5, 6];
let resultat4 = someTab(tab);
console.log(resultat4); // => affiche 22



// eviter cette mauvaise maniere
// let resultat3 = someTab([1, 6, 9]); // => 16 