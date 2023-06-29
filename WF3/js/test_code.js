let prenom = ["Alexis", "Jérémy", "Michel", "Faissal"];

function reverseWorld(stringTab){
   stringTab.split('');
   console.log(stringTab);
   stringTab.reverse();
   console.log(stringTab);
   stringTab.join('');
   console.log(stringTab);
   return stringTab;
}

let prenomIverse = reverseWorld(prenom);