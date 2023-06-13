// *************************  ENONNCE - 1 **********************//


{/* <h1>Baccalauréat</h1>
<p>Ecrivez un programme baccalaureat.js qui fait saisir la moyenne d'un candidat puis affiche si ce candidat est :   </p>
<ul>
    <li>recalé (moyenne inférieure à 10),</li>
    <li>reçu (moyenne entre 10 et 12)</li>
    <li>ou reçu avec mention (moyenne supérieure ou égale à 12).</li>
</ul>

<h3>Résultat :</h3> */}


// ---------------------- Exercices - 1 ----------------------- //

var moyenne = prompt("Veuillez saisir votre moyenne");

if (moyenne < 10){
    document.write("Vous êtes recalé");
}
else if ((moyenne >= 10) && (moyenne <= 12)){
    document.write("Vous êtes reçu");
}
else {
    document.write("Vous êtes reçu avec mention");
}

