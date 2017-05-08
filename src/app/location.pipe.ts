import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'location'
})
export class LocationPipe implements PipeTransform {

  transform(input: Animal[], location: string): any {
    return input.filter(animal => animal.location === location).length
  }

}
