function addition(a, b) {
    let resultat = a + b;
    return resultat;
   }
   // idem
   function addition(a, b) {
    return a + b;
   }
    
   // let somme = addition(2, 5);
   // let somme2 = addition(4, 7);
   // console.log(somme);
   // console.log(somme2);
    
   function direBonjourPrenom(prenom = "Anonyme") {
    document.write("Bonjour, ", prenom, " !");
   }
    
   direBonjourPrenom(); // Bonjour, Anonyme !
    
   // direBonjourPrenom("Michel"); // Bonjour, Michel !