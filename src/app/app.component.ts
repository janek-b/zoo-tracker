import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNewAnimal: boolean = true;

  toggleNewAnimal() {
    this.showNewAnimal = !(this.showNewAnimal);
  }

}
