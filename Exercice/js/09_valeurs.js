// **********************  ENONCE - 1 *******************//

// Voir fichier : 09_valeurs.html

// ------------ Exercices - 1 (1ère partie)------------- //

var nb1 = Number(prompt("Entrez nb1 :"));
		var nb2 = Number(prompt("Entrez nb2 :"));
		var nb3 = Number(prompt("Entrez nb3 :"));

		if (nb1 > nb2){
			nb1 = nb3 * 2;
		}
		else{
			nb1++;
        }
        
        if(nb2 > nb3){
            nb1 = nb1 + nb3 *3;
        }else{
            nb1 = 0;
            nb3 = nb3 * 2 + nb2;
        }
		

        document.write(nb1);
        document.write(nb2);
        document.write(nb3);