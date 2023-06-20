// var manege = 0;


// document.write("<hr>")


// for (var i = 1; i<=10; i++){
//     document.write("Bravo vous venez d'accomplir un nouveau tour <br>");
// }


// document.write("<hr>")


// var nbTour = parseInt(prompt("Veuillez saisir un nombre de tour"));

// while (isNaN(nbTour)){
//     nbTour = parseInt(prompt("Veuillez saisir un nombre de tour"));
// }

// for (var tour = 1; tour <= nbTour; tour++){
//     document.write("c'est le tour de manège n° " + tour + "<br>");
// }

var nbrTourResult = parseInt(prompt("Veuillez saisir un nombre de tour"));

// var result;

// document.write("c'est le tour de manège n° " + nbrTourResult + "<br>");

if (nbrTourResult <= 10){
    document.write("c'est le tour de manège n° " + nbrTourResult + "<br>");
} 
else{
    document.write("désolée le nombre de tour est limité à 10");
}

