import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-edit',
  templateUrl: './animal-edit.component.html',
  styleUrls: ['./animal-edit.component.css']
})
export class AnimalEditComponent implements OnInit {
  @Input() animal: Animal;
  @Output() closeEditSender = new EventEmitter();

  locations: string[];
  diets: string[];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.locations = this.animalService.getLocations();
    this.diets = this.animalService.getDiets();
  }

  updateAnimal() {
    this.animalService.updateAnimal(this.animal);
    this.closeEditSender.emit();
  }

}
