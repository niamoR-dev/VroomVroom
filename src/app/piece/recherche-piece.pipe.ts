import { Pipe, PipeTransform } from '@angular/core';
import {Piece} from "./models/piece";

@Pipe({
  name: 'recherchePiece'
})
export class RecherchePiecePipe implements PipeTransform {

  transform(piece: Piece[], searchInput: string): any[] {
    if(!piece) return [];
    if(!searchInput) return piece;

    searchInput = searchInput.toLowerCase();

    return piece.filter(p => {
      return p.libelle.toLowerCase().includes(searchInput);
    })
  }

}
