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
import {FactureJointure} from "../../../shared/models/factureJointure";
import {DevisJointure} from "../../../shared/models/devisJointure";

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

  async getFacture(id: number, listeFacture?: FactureJointure[]) {
    let facture: FactureJointure;

    facture = await this.sFacture.getData(id, URL_LIST.facture).toPromise() || new Facture();
    if (facture.id != id) return null;

    facture.devis = await this.test.getDevis(<number>facture.devisId) || new DevisJointure();
    if (facture.devis.id == 0) return null;

    if(listeFacture) {
      listeFacture.push(facture)
    }
    return facture
  }

}
