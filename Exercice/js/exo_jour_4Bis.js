// *********************  E N N O N C É - 1 ******************//



// 1- Déclarer une fonction "additionDesChiffres" qui prend trois paramètres
// 	   - premier de type number
//     - deuxième de type string
//     - troisème de type tableau
    
// La fonction aura une valeur de retour
    
// 2- Grâce à une boucle (le nombre de la condition dans la boucle vient du premier paramètre), la fonction "additionDesChiffres" va remplir le tableau "paramArray" avec les index de la boucle 



// -------------------- EXERCICES - 1 ----------------------- //


function additionDesChiffres(paramNum, paramString, paramArray) {
    for (var i = 0; i <= paramNum; i++) {
      paramArray.push(i);
    }
    var result = [paramString, paramArray];
    return result;
  }
  
  // var valeurRetour = additionDesChiffres(15, "Le résultat de notre fonction : ", []);
  
  var num = 15;
  var chaineCaractere = "Le résultat de notre fonction : ";
  var tab = [];
  var valeurRetour = additionDesChiffres(num, chaineCaractere, tab);
  
  document.write(valeurRetour);