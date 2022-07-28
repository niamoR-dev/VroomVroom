import { Pipe, PipeTransform } from '@angular/core';
import { Client } from 'src/app/shared/models/client';

@Pipe({
  name: 'rechercheClient'
})
export class RechercheClientPipe implements PipeTransform {

  transform(client: Client[], searchInput: string): any[] {
    if (!client) return [];
    if (!searchInput) return client;

    searchInput = searchInput.toLowerCase();

    return client.filter(c => {
      // @ts-ignore
      return c.nom.toLowerCase().includes(searchInput);
    })
  }

}
