import { Component } from '@angular/core';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent {
  title!: string;
  description!: string;
  url!: string;  

  submitForm(){
    console.log(this.title, this.description, this.url);
  }
}
