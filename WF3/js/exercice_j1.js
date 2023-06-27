// *****************  ENONCE - 1 **************//

// Écrire un programme informatique en Javascript qui calcule le volume d’un parallélépipède rectangle.On rappelle que la formule pour calculer le volume est : Volume = largeur x longueur x hauteur.pour y arriver :1.il faut déclarer 3 variables (largeur, longueur et hauteur) et les initialiser avec des valeurs numériques 2.déclarer une variable volume et l’initialiser à 03.Appliquer la formule puis affecter son résultat à la variable volume4.afficher le résultat sur la console



// ------------- Exercices - 1 -------------- // 

// var largeur = 10;
// var longueur = 2;
// var hauteur = 5;
// var volume = 0;
// var volume = largeur * longueur * hauteur;
// console.log(volume);



// *****************  ENONCE - 2 **************//


/*soit la variable age
ecrire un programme qui permet:
1 d'afficher bébé si age inferieur a 5
2 d'afficher enfant si age est compris entre 5 et 10
3 d'afficher ado si age est compris entre 11 et 18
4 d'afficher vieux si age age est strictement superieur a 18 */

// ------------- Exercices - 2 -------------- // 

let age = 2;

if(age < 5){
    console.log("bébé");
}
else if((age >= 5) && (age <=10)){
    console.log("enfant");
}
else if((age > 10) && (age <=18)){
    console.log("ado");
}
else if(age > 18) {
    console.log("sage");
}