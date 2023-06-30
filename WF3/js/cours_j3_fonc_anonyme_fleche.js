

// ------------- FONCTION ANONYME FLECHE (cours 3)---------------- //


// ici on utilise une fonction traditionnelle (avec déclaration et implantation d'une fonction)
function rappel() {
    console.log("Ceci est une fonction de rappel")
}

setTimeout(rappel(), 2000);

 

// ici on utilise une fonction anonyme
setTimeout(function() {
    console.log("Ceci est une fonction de rappel")
}, 2000)