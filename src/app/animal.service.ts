import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AnimalService {
  animals: FirebaseListObservable<any>;

  diets: string[] = ['Carnivore', 'Herbivore', 'Omnivore'];
  locations: string[] = ['Great Northwest', 'Pacific Shores', 'Discovery Zone', 'Primate Forest', 'Elephant Lands', 'Africa'];

  constructor(public db: AngularFireDatabase) {
    this.animals = db.list('/animals');
  }

  saveAnimal(animal: Animal) {
    this.animals.push(animal);
  }

  getAnimals() {
    return this.animals;
  }

  updateAnimal(animal: any) {
    this.animals.update(animal.$key, animal);
  }

  getDiets() {
    return this.diets;
  }

  getLocations() {
    return this.locations;
  }

}
