import { Pipe, PipeTransform } from '@angular/core';
import { Tache } from './models/tache';

@Pipe({
  name: 'rechercheTache'
})
export class RechercheTachePipe implements PipeTransform {

  transform(tache: Tache[], searchInput: string): any[] {
    if(!tache) return [];
    if(!searchInput) return tache;

    searchInput = searchInput.toLowerCase();

    return tache.filter(t => {
      return t.description.toLowerCase().includes(searchInput);
    })
  }

}
