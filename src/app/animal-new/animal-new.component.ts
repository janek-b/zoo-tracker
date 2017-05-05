import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-new',
  templateUrl: './animal-new.component.html',
  styleUrls: ['./animal-new.component.css']
})
export class AnimalNewComponent implements OnInit {
  diet: string;
  sex: string;
  location: string;

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
  }

  addAnimal(name: string, species: string, diet: string, sex: string, location: string, age: string, caretaker: string, likes: string, dislikes: string) {
    var newAnimal: Animal = new Animal(name, species, diet, sex, location, parseInt(age), parseInt(caretaker), likes, dislikes);
    this.animalService.saveAnimal(newAnimal);
  }

}
