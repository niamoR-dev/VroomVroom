import {Pipe, PipeTransform} from '@angular/core';
import {Facture} from "../../shared/models/facture";

@Pipe({
  name: 'rechercheFacture'
})
export class RechercheFacturePipe implements PipeTransform {

  transform(facture: Facture[], searchInput: string): any[] {
    if (!facture) return [];
    if (!searchInput) return facture;

    return facture.filter(f => {
      return f.client?.nom?.toLowerCase().includes(searchInput) || f.client?.prenom?.toLowerCase().includes(searchInput) ||
        f.vehicule?.marque?.toLowerCase().includes(searchInput) || f.vehicule?.modele?.toLowerCase().includes(searchInput);
    })
  }

}
