import { Component } from '@angular/core';
import { Movie } from '../models/movie.models';
import { MovieService } from '../movieService';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies!: Movie[];
  constructor(private serviceMovie: MovieService){}

  ngOnInit(){

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
