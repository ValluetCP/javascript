
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

