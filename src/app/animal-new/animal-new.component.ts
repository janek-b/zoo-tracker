import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal-new',
  templateUrl: './animal-new.component.html',
  styleUrls: ['./animal-new.component.css']
})
export class AnimalNewComponent implements OnInit {
  diet: string;
  sex: string;
  location: string;

  constructor() { }

  ngOnInit() {
  }

  addAnimal(name: string, species: string, diet: string, sex: string, location: string, age: string, caretaker: string, likes: string, dislikes: string) {
    var newAnimal: Animal = new Animal(name, species, diet, sex, location, parseInt(age), parseInt(caretaker), likes, dislikes);
    console.log(newAnimal);
  }

}
