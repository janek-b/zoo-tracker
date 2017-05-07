import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AnimalService {
  animals: FirebaseListObservable<any>;

  diets: string[] = ['carnivore', 'herbivore', 'omnivore'];
  locations: string[] = ['great northwest', 'pacific shores', 'discovery zone', 'primate forest', 'elephant lands', 'africa'];

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
