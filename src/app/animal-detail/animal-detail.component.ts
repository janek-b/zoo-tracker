import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {
  @Input() animal: Animal;
  @Output() closeDetailsSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeDetails() {
    this.closeDetailsSender.emit();
  }

}
