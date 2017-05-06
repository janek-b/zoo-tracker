import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-edit',
  templateUrl: './animal-edit.component.html',
  styleUrls: ['./animal-edit.component.css']
})
export class AnimalEditComponent implements OnInit {
  @Input() animal: Animal;

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
  }

  updateAnimal() {
    this.animalService.updateAnimal(this.animal);
  }

}
