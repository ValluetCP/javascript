import { Injectable } from '@angular/core';
import { Movie } from './models/movie.models';

@Injectable({
providedIn: 'root'
})
export class MovieService {
movies! : Movie[];
    constructor() {
        this.movies = [
            new Movie(
              "Miraculous" ,
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eius." ,
              "https://movies.monnaie-services.com/FR/poster/D1D5AFC5/320/3QJIC.jpg" ,
              75,
              false
            ),
            new Movie(
              "Mario Bros" ,
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eius." ,
              "https://fr.web.img5.acsta.net/pictures/23/03/20/14/57/4979368.jpg/r_5000_x" ,
              50,
              false
            )
          ]
    }
}