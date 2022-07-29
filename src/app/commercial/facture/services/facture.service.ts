import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {Devis} from "../../../shared/models/devis";
import {Client} from "../../../shared/models/client";
import {Vehicule} from "../../../shared/models/vehicule";
import {Utilisateur} from "../../../shared/models/utilisateur";
import {URL_LIST} from "../../../shared/utils/url.list";
import {Facture} from "../../../shared/models/facture";
import {DevisService} from "../../devis/services/devis.service";

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http: HttpClient,
              private sFacture: ApiWebService<Facture>,
              private test: DevisService,
              private sDevis: ApiWebService<Devis>,
              private sClient: ApiWebService<Client>,
              private sVehicule: ApiWebService<Vehicule>,
              private sUtilisateur: ApiWebService<Utilisateur>) {
  }

  async getFacture(id: number, listeFacture?: Facture[]) {
    let facture: Facture;

    facture = await this.sFacture.getData(id, URL_LIST.facture).toPromise() || new Facture();
    if (facture.id != id) return null;

    facture.vehicule = await this.sVehicule.getData(<number>facture.vehiculeId, URL_LIST.vehicule).toPromise() || new Vehicule();
    if (facture.vehicule.id == 0) return null;

    facture.devis = await this.sDevis.getData(<number>facture.devisId, URL_LIST.devis).toPromise() || new Devis();
    if (facture.devis.id == 0) return null;

    facture.client = await this.sClient.getData(<number>facture.devis.clientId, URL_LIST.client).toPromise() || new Client();

    if(listeFacture) {
      listeFacture.push(facture)
    }
    return facture
  }

}
