import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  handleClick() {
    // console.log('Le bouton a été cliqué !' );
    this.like++;
   }
  titre!: string;
  description !: string;
  img!: string;
  like!: number;
  ngOnInit(): void {
    this.titre = "Miraculous" ;
    this.description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eius." ;
    this.img = "https://movies.monnaie-services.com/FR/poster/D1D5AFC5/320/3QJIC.jpg" ;
    this.like = 75;
    }
     
}
