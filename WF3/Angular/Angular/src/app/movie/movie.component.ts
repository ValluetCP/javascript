import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie.models';
import { MovieService } from '../movieService';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  constructor(private serviceMovie: MovieService){}
  @Input() movie!: Movie;
  couleur = "white";

// Toutes les informations ci-dessous sont remplacées par : movie!: Movie;
  // titre!: string;
  // description !: string;
  // img!: string;
  // like!: number;
  // liked! : boolean;

  
  
  heartClick() {
    if(this.movie.liked == true){
      this.movie.like--;
      this.couleur ='white';
      this.movie.liked = false;
      }else{
      this.movie.like++;
      this.movie.liked = true;
      this.couleur ='pink';
      }
     
  }
  
  remove(){
    // this.serviceMovie.movies.filter(film => film.id == this.movie.id);
    const index = this.serviceMovie.movies.findIndex((film) => film.id === this.movie.id);
    if (index !== -1) {
      this.serviceMovie.movies.splice(index, 1);}
      
  }
}
