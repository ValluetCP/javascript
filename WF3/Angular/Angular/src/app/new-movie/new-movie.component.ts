import { Component } from '@angular/core';
import { MovieService } from '../movieService';
import { Movie } from '../models/movie.models';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent {
  constructor(private serviceMovie : MovieService){}
  title!: string;
  description!: string;
  url!: string;  
  movie!:Movie;

  submitForm(){
    this.movie = new Movie(
      this.title,
      this.description,
      this.url,
      0,
      false,
      this.serviceMovie.movies.length+1,
      0
    );
    this.serviceMovie.movies.push(this.movie);
  }
}
