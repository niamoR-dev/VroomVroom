import {Pipe, PipeTransform} from '@angular/core';
import {FactureJointure} from "../../shared/models/factureJointure";

@Pipe({
  name: 'rechercheFacture'
})
export class RechercheFacturePipe implements PipeTransform {

  transform(facture: FactureJointure[], searchInput: string): any[] {
    if (!facture) return [];
    if (!searchInput) return facture;

    return facture.filter(f => {
      return f.devis?.client?.nom?.toLowerCase().includes(searchInput) || f.devis?.client?.prenom?.toLowerCase().includes(searchInput) ||
        f.devis?.vehicule?.marque?.toLowerCase().includes(searchInput) || f.devis?.vehicule?.modele?.toLowerCase().includes(searchInput);
    })
  }

}
