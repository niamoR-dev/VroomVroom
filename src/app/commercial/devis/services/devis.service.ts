import {Injectable} from '@angular/core';
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {Devis} from "../../../shared/models/devis";
import {Client} from "../../../shared/models/client";
import {Vehicule} from "../../../shared/models/vehicule";
import {URL_LIST} from "../../../shared/utils/url.list";

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private devisService: ApiWebService<Devis>,
              private clientService: ApiWebService<Client>,
              private vehiculeService: ApiWebService<Vehicule>,) {
  }

  addNewDevis(devis: Devis) {
    this.devisService.addData(devis, URL_LIST.devis).subscribe({
      next: data => {

      }
    })
  }

  updateClient(devis: Devis) {
    this.clientService.getData(<number>devis.clientId, URL_LIST.client).subscribe()
  }

}
