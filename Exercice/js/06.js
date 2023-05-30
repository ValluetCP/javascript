var date_du_jour, jour_suivant;
date_du_jour = "mercredi";
jour_suivant = "jeudi";


var saisi_du_jour = prompt("Quel jour de la semaine sommes-nous?");

if (saisi_du_jour === date_du_jour){
    document.write("Demain nous serons jeudi");
} 
else {
    document.write("Erreur sur la date du jour");
}



