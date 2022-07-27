import { Pipe, PipeTransform } from '@angular/core';
import {JointureDevisClient} from "../models/jointureDevisClient";

@Pipe({
  name: 'rechercheDevis'
})
export class RechercheDevisPipe implements PipeTransform {

  transform(devis: JointureDevisClient[], searchInput: string): any[] {
    if(!devis) return [];
    if(!searchInput) return devis;

    searchInput = searchInput.toLowerCase();
    return devis.filter(d => {
      return d.client?.[0].prenom.toLowerCase().includes(searchInput) ||
        d.client?.[0].nom.toLowerCase().includes(searchInput) ||
        d.vehicule?.marque?.toLowerCase().includes(searchInput) ||
        d.vehicule?.modele?.toLowerCase().includes(searchInput)
    });

  }
}
