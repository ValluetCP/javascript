
// <h1>Heure suivante</h1>

// 	<p>Ecrivez un programme qui demande une heure à un utilisateur sous la forme de trois informations (heures, minutes,
// 		secondes).</p>
// 	<p>il affiche ensuite l'heure qu'il sera une seconde plus tard.</p>
// 	<p>Les erreurs de saisie doivent être gérées.</p>
// 	<ul style='border: 1px solid; background-color: lightgray'>Ce programme est moins simple qu'il en a l'air : >
// 		<li>14h17m59s => 14h18m0s</li>
// 		<li>6h59m59s => 7h0m0s</li>
// 		<li>23h59m59s => 0h0m0s (minuit)</li>
// 	</ul>

// 	<h3>Résultat :</h3>


var heure = prompt("Saisissez le nombre d'heure");
var minute = prompt("Saisissez le nombre de minutes");
var seconde = prompt("Saisissez le nombre de secondes");

if ((heure >= 0 ) && (heure <= 23)  && (minute >= 0 ) && (minute <= 59) && (seconde >= 0 ) && (seconde <= 59)){
    seconde++;
    if (seconde === 60){
        seconde = 0;
        minute ++;
        if (minute === 60){
            minute = 0;
            heure ++;
            if (heure === 24){
                heure = 0;
            }       
        }
    }
    document.write("<h3>Dans une seconde il sera " + heure + " h " + minute + " m " + seconde + " s</h3>");
}else{
    document.write("Heure incorrecte !");
}
