import { Component } from '@angular/core';
import { Auto } from './auto' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showroom-auto';
  Autolist: Auto[]=[
    {
      make: "Audi",
      model: "A3",
      price: 163,
      power: 6,
      photo: "../assets/photos/a3.png",
      units:11
    },

    {
      make: "Land Rover",
      model: "Range Rover Evoque",
      price: 290,
      power: 8,
      photo: "../assets/photos/evoque.png",
      units:4
    },
    {
      make: "Mercedes Benz",
      model: "GLA",
      price: 220,
      power: 8,
      photo: "../assets/photos/gla.png",
      units:9
    },
    {
      make: "Alfa Romeo",
      model: "Stelvio",
      price: 340,
      power: 18,
      photo: "../assets/photos/stelvio.png",
      units:11
    },
    {
      make: "BMW",
      model: "x2",
      price: 210,
      power: 8,
      photo: "../assets/photos/x2.jpg",
      units:3
    },
    {
      make: "BMW",
      model: "x3",
      price: 360,
      power: 11,
      photo: "../assets/photos/x3.jpg",
      units:6
    }
  ]


selectedAuto:Auto | undefined

updateAuto(auto:Auto){
  this.selectedAuto=auto

}
}
