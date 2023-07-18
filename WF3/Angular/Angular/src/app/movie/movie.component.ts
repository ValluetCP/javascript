import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie.models';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  @Input() movie!: Movie;
  color : string ='white';

// Toutes les informations ci-dessous sont remplacées par : movie!: Movie;
  // titre!: string;
  // description !: string;
  // img!: string;
  // like!: number;
  // liked! : boolean;

  


  // ngOnInit(): void {
  //   this.movie = new Movie(
  //     "Miraculous" ,
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eius." ,
  //     "https://movies.monnaie-services.com/FR/poster/D1D5AFC5/320/3QJIC.jpg" ,
  //     75,
  //     false
  //   )
  // }
  
  heartClick() {
    if(this.movie.liked == true){
      this.movie.like--;
      this.color ='white';
      this.movie.liked = false;
      }else{
      this.movie.like++;
      this.movie.liked = true;
      this.color ='red';
      }
     
  }
     
}
