
var nb1 = 10;
if (nb1 > 50) { // true
    console.log("nb1 est bien supérieur à 50");
}
console.log("Je ne suis pas dans la condition");


var nb1 = 10;
if (nb1 > 50) { // true
    console.log("nb1 est bien supérieur à 50");
    console.log("Je ne suis pas dans la condition");
}
// les 2 s'affichent


var nb1 = 10;
if (nb1 > 50) { // true
    console.log("nb1 est bien supérieur à 50");
}
else {
    console.log("nb1 n'est pas supérieur à 50");
}



var nb1 = 10;
if (nb1 > 50) { // si "if" est true
    console.log("nb1 est bien supérieur à 50");
}
else if (nb1 == 50){ // si "if" n'est pas true et que "else if" est true
    // le == permet de différencier. Toujours utiliser cette syntaxe dans les "if"
    console.log("je suis dans else if");
}
else { //sinon, si "if" n'est pas true et que "else" n'est pas true non plus :
    console.log("Je suis dans else");
}
// dans tous les cas js va éxécuter les opérations suivantes (à savoir, il lis ligne par ligne)
console.log("Je ne suis pas dans la condition");


//  if isNaN(nb1) {}  // s'il n'est pas une valeur numérique
//  if isNaN(nb1) {}  // si c'est un string

var prenom = "mitra";
var unChiffre = 12;

if(isNaN(prenom)){
    console.log();
}
