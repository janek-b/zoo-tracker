import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Animal } from '../animal.model';
import { AnimalService } from '../animal.service';

import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  @Output() animalDetailSender = new EventEmitter();

  showDetails: boolean = true;
  selectedAnimal: Animal = null;

  animals: Animal[] = [];
  species: string[] = [];

  locations: string[];
  diets: string[];

  columns: ITdDataTableColumn[] = [
    { name: 'name', label: 'Name'},
    { name: 'species', label: 'Species' },
    { name: 'age', label: 'Age'},
    { name: 'diet', label: 'Diet'},
    { name: 'location', label: 'Location' },
    { name: 'caretaker', label: 'Caretaker'},
    { name: 'sex', label: 'Sex'},
  ];

  filteredData: Animal[] = this.animals;
  filteredTotal: number = this.animals.length;
  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 5;
  sortBy: string = 'species';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;


  constructor(private animalService: AnimalService, private _dataTableService: TdDataTableService) { }

  ngOnInit() {
    this.animalService.getAnimals().subscribe(animalData => {
      this.animals = animalData;
      this.species = animalData.map(animal => animal.species).filter((val, index, arr) => arr.indexOf(val) === index);
      this.filter();
    });
    this.locations = this.animalService.getLocations();
    this.diets = this.animalService.getDiets();
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  filter(): void {
    let newData: Animal[] = this.animals;
    newData = this._dataTableService.filterData(newData, this.searchTerm, true);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
 }

  showAnimalDetails(animal: Animal) {
    this.showDetails = false;
    this.selectedAnimal = animal;
  }

  closeDetails() {
    this.showDetails = true;
  }


}
