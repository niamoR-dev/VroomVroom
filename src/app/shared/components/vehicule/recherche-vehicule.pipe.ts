import { Pipe, PipeTransform } from '@angular/core';
import {Vehicule} from "../../models/vehicule";

@Pipe({
  name: 'rechercheVehicule'
})
export class RechercheVehiculePipe implements PipeTransform {

  transform(vehicules: Vehicule[], searchInput: string): any[] {
    if(!vehicules) return [];
    if(!searchInput) return vehicules;

    searchInput = searchInput.toLowerCase();

    return vehicules.filter(p => {
      return p.marque?.toLowerCase().includes(searchInput) || p.modele?.toLowerCase().includes(searchInput);
    })
  }

}
