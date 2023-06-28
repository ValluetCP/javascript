
// *************************  ENONNCE - 1 **********************//

/* ecrire une fonction maxMin qui prend trois paramètresles deux premiers sont des nombres (a et b)le troisième un boolean (c)par défaut le troisieme parametre (c = true)

● si le paramètre c = true la fonction retourne le maximum entre a et b

● si le paramètre c = false la fonction retourne le minimum entre a et b
exemple:
maxMin(2, 5, true) => 5
maxMin(2, 5, false) => 2*/

// ---------------------- Exercices - 1 ----------------------- //

function maxMin(a, b, c = true){

    if ((c == true) && (a > b)){
        console.log(a);
        return a;
    }
    else if((c == true) && (b > a)){
        console.log(b);
        return b;
    }
    
    else if ((c == false) && (a > b)){
        console.log(b);
        return b;
    }

    else if ((c == false) && (b > a)){
        console.log(a);
        return a;
    }
        
}

var resultat = maxMin(14, 28, true);
var resultat2 = maxMin(14, 28, false);


// ---------------------- Correction - 1 ----------------------- //

function maxMin(a, b, c = true) {
    if (c == true) { // si c == true
    if (a > b) { // si a plus grand que b
    return a; // on retourne a
    } else { // sinon
    return b; // on retourne b
    }
    } 
    else { // si c = false
    if (a < b) { // si a est plus petit que b
    return a; // on retourne a
    } else { // sinon
    return b; // on retourne b
    }
    }
   }
   let resultat = maxMin(3, 8, true);
   console.log(resultat);
    
   // on retourne a si (c = true et a > b) ou (c = false et a < b)
   // on retourne b si (c = true et a < b) ou (c = false et a > b)
   function maxMin(a, b, c = true) {
    if (((c == true) && (a > b)) || ((c == false) && (a < b))) {
    return a;
    } else if (((c == true) && (a < b)) || ((c == false) && (a > b))) {
    return b;
    }
   }
    
   let result = maxMin(3, 8, false);
   console.log(result);


   // *************************  ENONNCE - 2 **********************//

   /*ecrire une fonction sommeTab qui prend en paramètre un tableau composé de nombres.
   la fonction doit retourner la somme des éléments du tableauexemple:sommeTab([1,6,9]) => 16*/


   // ---------------------- Exercices - 2 ----------------------- //

//    function someTab (nb1,){
//         while
//     return
//    }

//    someTab()