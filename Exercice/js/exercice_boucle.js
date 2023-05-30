/* -------------------------------
            EXERCICE
j'ai 1000€ sur mon compte
chaque mois j'ajoute 50€
combien de temps me faut-il pour avoir 2000€ sur mon compte ?
-------------------------------- */
// var monCompte = 1000;
// var temps = 0;
// while(monCompte < 2000) {

//     monCompte += 50;
//     temps++;
// }
// document.write("<h3>Sous sur mon compte : " + monCompte + "</h3>");
// document.write("<h3>Jusqu'à 2000€, il me faut : " + temps + " mois</h3>");
// // document.write("<h3>Jusqu'à 2000€, il me faut : " + (temps/12) + " années</h3>");

// // avec une boucle FOR
// var tps = 0;
// for (var mesSous = 1000; mesSous < 2000 ; mesSous += 50) {
//     document.write("<h3>Le mois suivant j'ai : " + mesSous + "</h3>");
//     tps++;
// }
// document.write("<h3>Il aura fallu " + tps + " mois.</h3>");


// /*FIN*/


// var monCompte = 1000;
// var temps = 0;

// // for (var monCompte=1000; monCompte <= 2000; monCompte+= 50) {
// //     document.write("<h3>Sous sur mon compte : " + monCompte + "</h3>");
// //     temps++;
// // }

// while(monCompte < 2000) {

//     monCompte += 50;
//     temps++;
// }
// document.write("<h3>Sous sur mon compte : " + monCompte + "</h3>");
// document.write("<h3>Jusqu'à 2000€, il me faut : " + temps + " mois</h3>");
// // document.write("<h3>Jusqu'à 2000€, il me faut : " + (temps/12) + " années</h3>");

// // avec une boucle FOR
// var tps = 0;
// for (var mesSous = 1000; mesSous < 2000 ; mesSous += 50) {
//     document.write("<h3>Le mois suivant j'ai : " + mesSous + "</h3>");
//     tps++;
// }
// document.write("<h3>Il aura fallu " + tps + " mois.</h3>");


// /*FIN*/

var j = 0
for (var argentPoche = 1; argentPoche <= 7; argentPoche++){
    document.write('<p>Dans mes poches : ' + argentPoche + ' euros </p>' );
    j++;
}

// for (var j = 0; argentPoche <= 7; j++){
    document.write("<h3>Il aura fallu " + j + " jours.</h3>");
// }
