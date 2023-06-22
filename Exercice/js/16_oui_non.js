// alert('test');

// var disMoi = "";
// var i = 1;

// while ((disMoi !== "oui") && (disMoi !== "non") && (disMoi !== "Oui") && (disMoi !== "Non") && (disMoi !== "OUI") && (disMoi !== "NON")) {
//     disMoi = prompt("Allez!! On joue à ni oui ni non?");
//     document.write('"' + disMoi + '" n\'est pas une réponse, pour la ' + i + '° fois, veux-tu jouer oui ou non? <br>');
//     i++;
// }

// i--;//parce qu'il y a une incrémentation en trop
// document.write("<p style='background-color:cyan; text-align:center;'>PERDU ;-) ! Tu as tenu " + i + " tours.</p>");




var jeu = "";
// var jeu = prompt("Allez!! On joue à ni oui ni non?").toLowerCase();
var i = 1;


while ((jeu !== "oui") && (jeu !== "non")){
    alert('test');
    jeu = prompt("Allez!! On joue à ni oui ni non?").toLowerCase();
    document.write('"' + jeu + '"' + "n/'est pas une réponse pour la " + i +"° fois, veux-tu jouer à oui ou non ?");
    i++;
}

i--;//parce qu'il y a une incrémentation en trop
document.write("<p style='background-color:cyan; text-align:center;'>PERDU ;-) ! Tu as tenu " + i + " tours.</p>");

// var disMoi = "";
// var i = 1;

// while ((disMoi !== "oui") && (disMoi !== "non")) {

//     disMoi = prompt("Allez!! On joue à ni oui ni non?").toLowerCase();

//     document.write('"' + disMoi + '" n\'est pas une réponse, pour la ' + i + '° fois, veux-tu jouer oui ou non? <br>');

//     i++;

// }