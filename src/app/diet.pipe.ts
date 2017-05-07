import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'diet'
})
export class DietPipe implements PipeTransform {

  transform(input: Animal[], diet: string): any {
    return input.filter(animal => animal.diet === diet).length
  }

}
