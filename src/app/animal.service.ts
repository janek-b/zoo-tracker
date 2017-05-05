import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AnimalService {
  animals: FirebaseListObservable<any>;

  constructor(public db: AngularFireDatabase) {
    this.animals = db.list('/animals');
  }

  saveAnimal(animal: Animal) {
    console.log(animal);
    this.animals.push(animal);
  }

}
