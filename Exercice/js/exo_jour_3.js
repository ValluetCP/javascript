// function affichagePrenoms(['Nawal', 'Wassila', 'Rahim', 'Jérémy', 'Narcis', 'Karima', 'Faïssal', 'Alin', 'Oliver', 'Cynthia', 'Alexis', 'Michel', 'Mitra']);

function affichagePrenoms(prenomsDev){
    // une fonction qui prend en paramètre un tableau de 12 éléments
    // prenomsDev : nom du tableau
    
    // utilisation de la boucle "for" afin d'afficher les éléments du tableau à partir d'une page web.
    for (var i = 0; i <= prenomsDev.length ; i++) { // sinon en valeur dure voici les syntaxes possibles : (i<12) ou (i<=11)
        // En valeur dynamique : prenomsDev.length
        document.write(prenomsDev[i]);
    }
}

affichagePrenoms();
//  comme il n'y pas de valeur de retour , on ne met pas dans une variable
