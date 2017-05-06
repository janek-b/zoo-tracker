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

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
  }

  updateAnimal() {
    this.animalService.updateAnimal(this.animal);
    this.closeEditSender.emit();
  }

}
