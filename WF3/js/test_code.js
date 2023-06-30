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



let c = new Cercle(2); // instancier un objet cercle = Creer un objet Cercle
c.afficherInfo();
// La syntaxe c.afficherInfo(); : 
//c'est l'objet "c" suivi d'un point
// puis la méthode "afficherInfo();"
