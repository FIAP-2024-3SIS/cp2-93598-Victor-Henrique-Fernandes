import { Component } from '@angular/core';
import { AnimalItemComponent } from "../animal-item/animal-item.component";
import { Animal } from '../models/animal';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-animal-page',
    standalone: true,
    templateUrl: './animal-page.component.html',
    styleUrl: './animal-page.component.css',
    imports: [AnimalItemComponent, CommonModule]
})
export class AnimalPageComponent {

  constructor() {

    let mingau =  new Animal("Mingau", "Felino",
    18, "macho");

    let thor =  new Animal("Thor", "cao",
    9, "macho");

    let snow =  new Animal("Snow", "felino",
    11, "macho");

    let caramelo =  new Animal("Caramelo", "cao",
    2, "macho");

    let mel =  new Animal("Mel", "cao",
    9, "femea");

    this.animals = [mingau, thor, snow, caramelo, mel];
  }
  animals : Animal[];

}
