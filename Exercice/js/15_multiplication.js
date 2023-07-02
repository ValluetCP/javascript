
var nbUser = parseInt(prompt("Saisissez un nombre entier entre 2 et 9"));

while (isNaN (nbUser) || (nbUser < 2) || (nbUser > 10)){
    nbUser = parseInt(prompt("Saisissez un nombre entier entre 2 et 9"));
}

var table = 0;
var resultat;

// while (nbUser <= 9){
//     if ()
// }

do{
    resultat = nbUser * table;
    document.write(nbUser + "x" + table + "=" + resultat + "<br>");
    table++;
}while (table <= 10);


