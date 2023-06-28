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

 


let tab = ["Alin", 45]; // ["Alin", 45]
tab[3] = "2 rue de l'amour"; // ["Alin", 45, "", "2 rue de l'amour"]
// vue que le tableau n'a pas d'indice 2 et 3 met l'indice 2 a vide et l'indice 3 avec la valeur
console.log(tab);
tab.push("0678545855"); // ["Alin", 45, "", "2 rue de l'amour", "0678545855"]
console.log(tab);
tab.unshift("Johanne"); // ["Johanne", "Alin", 45, "", "2 rue de l'amour", "0678545855"]
console.log(tab);
tab[3] = "future"; // ["Johanne", "Alin", 45, "future", "2 rue de l'amour", "0678545855"]
console.log(tab);
delete tab[3]; // ["Johanne", "Alin", 45, "", "2 rue de l'amour", "0678545855"]
console.log(tab);
tab = new Array(); // reinitialise le tableau
tab = [];  // reinitialise le tableau

 

let tableau = ["Cynthia", "Narcis", "Rahim", "Nawal", "Karima"];
let index = tableau.indexOf("Narcis");
console.log(index); // 1
let newTab = tableau.slice(0, 3); // ["Cynthia", "Narcis", "Rahim"]
console.log(newTab); 

 

let tabNumer = [1, 8, 19, 5];
console.log(tabNumer.sort()); // [1, 19, 5, 8]

 

tabNumer.sort(function (a, b) {
    return a - b;
});

 

let tab2 = [2, 7, 9, 8];
tab2.fill("Alexis"); // ["Alexis", "Alexis", "Alexis", "Alexis"]
console.log(tab2);
tab2.fill("Michel", 1, 3); // ["Alexis", "Michel", "Michel", "Alexis"]
console.log(tab2);

 

let tab3 = ["Alexis", "Jérémy", "Michel", "Faissal"];
let str = tab3.join(' '); // "Alexis Jérémy Michel Faissal"
console.log(str);
console.log(tab3.reverse()); // ["Faissal", "Michel", "Jérémy", "Alexis"];

 

let tab4 = [2, 5, 8];
// tab4.splice(1, 2); // [2]
tab4.splice(2, 0, 'a', 'b'); // [2, 5, 'a', 'b', 8]
console.log(tab4);

 

let tab5 = [1, 2, 3];
let tab6 = [4, 5, 6];
let tab7 = tab5.concat(tab6); // [1, 2, 3, 4, 5, 6]
console.log(tab7); 

 

let tab8 = [1, 6, 8, 3];
let tab9 = tab8.map(e => e * 5); // [5, 30, 40, 15]
console.log(tab9);