// creer une variable pour chaque bouton
let jeu = $("#jeu");
let solution = $("#solution");
let proposer = $("#proposer");
 
// creer une variable pour chaque input
let proposition = $("#proposition");
let essai = $("#essai");
let message = $("#message");
let reponse = $("#reponse");

// Générer un nombre aléatoire
let aleatoire = initialisation();
 
function initialisation(){
    var ChiffreRand = Math.random();
    ChiffreRand = ChiffreRand*51;
    ChiffreRand = Math.floor(ChiffreRand);
    return ChiffreRand;
}

// ecouter le click sur le bouton solution
// si on click sur le bouton solution il affiche le nombre mystere dans message

$("#solution").on('click', (e) => {
    e.preventDefault();
    // affiche le nombre mystere
    message.val(aleatoire); 
})
// let nbrEssai = 1;



let essaies = 0;
    console.log(aleatoire);
    var tiret = "-";
        proposer.on('click', (e) => {
            e.preventDefault();
            // essaies = essaies + "-" + reponse.val(proposition.val());
            
            if ((proposition.val() > 0) && (proposition.val() < 50)){    
                if(essaies < 7){  
                 
                    if (proposition.val() < aleatoire){
                  
                        essaies++;
                        essai.val(essaies);
                        reponse.val(reponse.val() + "-" +  proposition.val() );
                        message.val("Votre nombre est inférieur");
                    }
                    else if (proposition.val() > aleatoire){
                                  
                if(essaies == 0){
                    tiret = "";
                }
                        essaies++;
                        essai.val(essaies);
                        reponse.val(reponse.val() + "-" +  proposition.val() );
                        message.val("Votre nombre est supérieur");
                    }else{
                        
                        essaies++;
                        essai.val(essaies);
                        reponse.val(reponse.val() + "-" + proposition.val() );
                        message.val("C'est gagné !" + aleatoire);
                    } 
                }else{
                    message.val("Perdu !") 
                }
            }
        });
        
        




// while ((proposition.val() > 0) && (proposition.val() < 50)){
    
//     if (proposition.val() == aleatoire){
//         message.val("C'est gagné !");
//     }
//     else if (proposition.val() < aleatoire){
//         message.val("Votre nombre est inférieur");
//     }
//     else if (proposition.val() > aleatoire){
//         message.val("Votre nombre est supérieur");
//     }
//     nbrEssai++;
// }





// ecouter le click sur le bouton nouveau jeu
// si on click dessus il genere un nombre aleatoire entre 0 et 50 puis remet le nombre d'essaies a zero

 

// pour generer un nombre aleatoire utiliser l'objet math





