(4 == 4) && (5 != "5")              // => 
(10 > 5) || (3 <= 2)                // => 
!(true && false)                    // =>
(4 >= 4) && !(false || true)        // =>
(7 >= 8) || !(false && true)        // =>
(5 > 3) && (10 == 10)               // =>
!(true || false) && (6 >= 6)        // =>
(8 <= 4) || !(false && true)        // =>
!((10 > 8) || (5 < 2))              // =>

 


let i = 6; 

 

do {
    console.log(i); // affiche 6
    i++;  // incremente i 6 + 1 = 7
} while (i < 5); // verifie la condition

 

console.log(i); // affiche 7

 


// exemple du break => arreter l'execution de la boucle si la variable i egale 4
for (let i = 0; i < 10; i++){
    console.log(i); // affiche i
    if (i == 4) { // si i = 4
        break; // sortir de la boucle
    }
}



//  exemple du continue => on souhaite afficher que les nombres pairs entre 0 et 10
for (let i = 0; i <= 10; i++){
    if (i % 2 != 0) { // verifie si i n'est pas un nombre pair
        continue; // ignore et passe a l'iteration suivante
    }
    console.log(i);
}

 

// idem
for (let i = 0; i <= 10; i++){
    if (i % 2 == 0) {
        console.log(i);
    }
}

 

//  exemple du continue => on souhaite afficher que les nombres impairs entre 0 et 10
for (let i = 0; i <= 10; i++){
    if (i % 2 == 0) { // verifie si i n'est pas un nombre impair
        continue; // ignore et passe a l'iteration suivante
    }
    console.log(i);
}


