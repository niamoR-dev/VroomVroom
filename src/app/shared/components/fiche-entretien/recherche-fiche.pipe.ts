import { Pipe, PipeTransform } from '@angular/core';
import { JointureFicheClient } from "../../models/jointureFicheClient";

@Pipe({
  name: 'rechercheFiche'
})
export class RechercheFichePipe implements PipeTransform {

  transform(piece: JointureFicheClient[], searchInput: string): any[] {
    if (!piece) return [];
    if (!searchInput) return piece;

    searchInput = searchInput.toLowerCase();

    return piece.filter(f => {
      return f.description.toLowerCase().includes(searchInput);
    })
  }

}
