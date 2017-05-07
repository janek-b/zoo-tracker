import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'species'
})
export class SpeciesPipe implements PipeTransform {

  transform(input: Animal[], species: string): any {
    return input.filter(animal => animal.species === species).length
  }

}
