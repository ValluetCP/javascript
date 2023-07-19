
// Version longue

// export class Produit {
//     titre: string;
//     description: string;
//     urlImage: string;
//     nbclick: number;
//     click: boolean;

//     constructor(titre: string, description: string, urlImage: string, nbclick: number, click: boolean){
//     this.titre = "Mon composant";
//     this.description = "blablater ici...";
//     this.urlImage =
//    "https://t3.ftcdn.net/jpg/05/76/35/90/240_F_576359075_icHqsmA0QaGO8uqazn6djjCKZNPhtUon.jpg" ;
//     this.nbclick = 1;
//     this.click = false;
//     }
// }



// Version courte

export class Movie {
    constructor(
        public titre: string,
        public description: string,
        public img: string,
        public like: number,
        public liked: boolean,
        public id: number
     ){}
}
    