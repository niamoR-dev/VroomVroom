import { Pipe, PipeTransform } from '@angular/core';
import {Devis} from "../../shared/models/devis";

@Pipe({
  name: 'rechercheDevis'
})
export class RechercheDevisPipe implements PipeTransform {

  transform(devis: Devis[], searchInput: string): any[] {
    if(!devis) return [];
    if(!searchInput) return devis;

    searchInput = searchInput.toLowerCase();
    return devis.filter(d => {
      { // @ts-ignore
        return d.client?.[0].prenom.toLowerCase().includes(searchInput) || d.client?.[0].nom.toLowerCase().includes(searchInput) ||
                d.vehicule?.marque?.toLowerCase().includes(searchInput) ||
                d.vehicule?.modele?.toLowerCase().includes(searchInput)
      }
    });

  }
}
