import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNewAnimal: boolean = true;
  showDetails: boolean = true;
  selectedAnimal: Animal = null;

  toggleNewAnimal() {
    this.showNewAnimal = !(this.showNewAnimal);
  }

  showAnimalDetails(animal: Animal) {
    this.showDetails = false;
    this.selectedAnimal = animal;
  }

  closeDetails() {
    this.showDetails = true;
  }

}
