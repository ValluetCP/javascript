// *****************  ENONCE - 1 **************//

/* 
Supposons que vous deviez modéliser une classe Cercle qui représente un cercle avec le propriété rayon et les méthodes calculerSurface() qui calcule et retourne la surface du cercle et afficherInfo() qui affiche les informations du cercle dans la console.

 

Votre tâche consiste à créer la classe Cercle, instancier un objet Cercle et appeler les méthodes calculerSurface() et afficherInfo() pour l'objet instancié.



formule pour claculer la surface d'un cercle : PI multiplié par le rayon au caré PI * (rayon * rayon)*/

// ------------- Exercices - 1 -------------- //

//Creer la classe Cercle
class Cercle{
    //On déclare le constructeur de la class qui prend un parametre qui est le rayon 
    constructor(r){
        this.rayon = r;
    }

    //  Déclare les méthodes calculerSurface et afficherInfo
    calculerSurface(){
        // Calculer la surface
        let surface = Math.PI * Math.pow(this.rayon,2)
        // Math.pow(this.rayon,2) : formule pour rayon au carré;
        return surface;
    }
    afficherInfo(){
        // afficher les informations du cercle
        console.log(surface);
    }
}


// ------------- Correction - 1 -------------- //

// creer la classe Cercle
class Cercle{
    // on declare le constructeur de la classe qui prend un parametre qui est le rayon
    constructor(r) { 
        this.rayon = r;
    }

 

    // declarer les methodes calculerSurface et afficherInfo
    calculerSurface() {
        // calculer la suface
        let surface = Math.PI * Math.pow(this.rayon, 2);
        return surface;
    }

 

    afficherInfo() {
        // afficher les informations du cercle
        console.log("le cercle a un rayon de " + this.rayon + " est une surface de " + this.calculerSurface());
        // this.calculerSurface() retourne la valeur surface

 

        // console.log("le cercle a un rayon de " + this.rayon + " est une surface de " + Math.ceil(this.calculerSurface()));
    }
}


// instancier un objet Cercle
let c = new Cercle(2); // instancier un objet cercle = Creer un objet Cercle
c.afficherInfo();


// *****************  ENONCE - 2 **************//

/*Supposons que vous deviez modéliser une classe CompteBancaire qui représente un compte bancaire avec les propriétés suivantes : titulaire, solde et les méthodes deposer(montant) qui permet de déposer de l'argent sur le compte, retirer(montant) qui permet de retirer de l'argent du compte et afficherSolde() qui affiche le solde actuel du compte.

 

Votre tâche consiste à créer la classe CompteBancaire,
creer le constructeur avec les parametres : titulaire et solde
creer les methodes:  
  deposer qui prend un parametre pour ajouter de l'argent dans le compte
  retirer qui prend un parametre pour retirer de l'argent du compte
  afficherSolde qui afficher le solde du compte dans la console



instancier un objet CompteBancaire avec comme titulaire : Abraham et solde 5
appeller la methode ajouter en lui passant la valeur 10
appeller la methode retirer en lui passant la valeur 7
appeller la methode afficherSolde*/

// ------------- Exercices - 2 -------------- //

class CompteBancaire{
    constructor (nom, somme){
        this.titulaire = nom;
        this.solde = somme;
    }

    ajouter(montant){
        this.solde = this.solde + montant;
    }

    retirer(montant){
        this.solde = this.solde - montant;
    }

    afficherSolde(){
        console.log("il reste à Abraham " + this.solde + "eur sur son compte.");
    }
}

let compte1 = new CompteBancaire("Abraham",5);
compte1.ajouter(15);
compte1.retirer(3);

compte1.afficherSolde();


// ------------- Correction - 2 -------------- //

// class CompteBancaire
class CompteBancaire{
    // le constructeur prend 2 params: le titulaire => t et le solde => s
    constructor(t, s) { 
        this.titulaire = t;
        this.solde = s;
    }

 

    // declarer les methode deposer, retirer et afficherSolde
    deposer(montant) { // deposer prend un param : montant
        this.solde += montant;
        // this.solde = this.solde + montant;
    }

 

    retirer(montant) {
        this.solde -= montant;
        // this.solde = this.solde - montant;
    }

 

    afficherSolde() {
        console.log("le solde de votre compte est de: "+this.solde+ " €");
    }
}
// instancier un objet CompteBancaire
let compte = new CompteBancaire("Wassila", 80000);
compte.deposer(100000);
compte.retirer(50000);
compte.afficherSolde();




