import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-animal-new',
  templateUrl: './animal-new.component.html',
  styleUrls: ['./animal-new.component.css']
})
export class AnimalNewComponent implements OnInit {
  animalForm: FormGroup;

  locations: string[];
  diets: string[];
  species: string[] = [];
  filteredSpecies: Observable<string[]>;

  constructor(private animalService: AnimalService, private fb: FormBuilder) { }

  ngOnInit() {
    this.animalService.getAnimals().subscribe(animalData => {
      this.species = animalData.map(animal => animal.species).filter((val, index, arr) => arr.indexOf(val) === index);
    });
    this.locations = this.animalService.getLocations();
    this.diets = this.animalService.getDiets();

    this.animalForm = this.fb.group({
      name: [''],
      species: [''],
      diet: [''],
      sex: [''],
      location: [''],
      age: [''],
      caretaker: [''],
      likes: [''],
      dislikes: [''],
      img: ['']
    });

    this.filteredSpecies = this.animalForm.controls.species.valueChanges
      .startWith(null)
      .map(val => val ? this.filterSpecies(val) : this.species.slice());

  }

  filterSpecies(val: string): string[] {
    return this.species.filter(option => new RegExp(`^.*${val}`, 'gi').test(option));
  }


  addAnimal() {
    const formModel = this.animalForm.value;
    var newAnimal: Animal = new Animal(formModel.name, formModel.species, formModel.diet, formModel.sex, formModel.location, formModel.age, formModel.caretaker, formModel.likes, formModel.dislikes, formModel.img);
    this.animalService.saveAnimal(newAnimal);
    this.animalForm.reset();
  }

}
