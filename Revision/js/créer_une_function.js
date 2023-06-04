
            // --- CREER UNE FUNCTION PERSONNALISÉE --- //
            //         (implanter puis exécuter)


// Règles :
// - ne pas utiliser les mots clés de javascript pour les fonctions.
// - utiliser des mots (ou nom) explicites pour notre fonction
// cf - voir Exercice > js > exofunc.js


// 1 - IMPLANTER - La syntaxe pour implanter une function


// 2 - EXÉCUTER - La syntaxe pour exécuter une function

// ------------------------------------------------------------- //

                    //  --- DÉCRYPTAGE --- //


// 1 - IMPLANTATION

// Quand on implante une fonction, en général les paramètres sont considérés comme des variables

function additions(num1, num2) {
    // le nom de la function = explicite, elle porte le nom de l'action qu'on attend d'elle.
    // les paramètres = le nom des variables

    var resultat = num1 + num2;
    // On crée une variable avec l'opération souhaité (ex dans le cas suivant: une addition)

    return resultat;
     // mot clé "return" nous permet d'avoir une valeur de retour au moment où on execute la fonction
    // Attention, avec ce mot clé "return" on aura toujours une seule valeur de retour
    // return resultat + "coucou"; on peut en revanche faire une concaténation.
}


// 2 - EXÉCUTION

// quand on execute une fonction qui prend des paramètres, les valeurs données seront stockées dans les paramètres de la fonction en question
// dans notre exemple les deux valeurs de "2 et 3" seront stockées successivement dans les paramètres "num1 et num2" de la fonction "additions" 
var res = additions(2, 3);
// Comment traduit-on cette syntaxe?