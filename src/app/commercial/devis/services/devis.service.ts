import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {Client} from "../../../shared/models/client";
import {Vehicule} from "../../../shared/models/vehicule";
import {URL_LIST} from "../../../shared/utils/url.list";
import {Devis} from "../../../shared/models/devis";
import {Utilisateur} from "../../../shared/models/utilisateur";
import {Facture} from "../../../shared/models/facture";

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private http: HttpClient,
              private sDevis: ApiWebService<Devis>,
              private sClient: ApiWebService<Client>,
              private sFacture: ApiWebService<Facture>,
              private sVehicule: ApiWebService<Vehicule>,
              private sUtilisateur: ApiWebService<Utilisateur>) {
  }

  async getDevis(id: number, listeDevis?: Devis[]) {
    let devis: Devis;

    devis = await this.sDevis.getData(id, URL_LIST.devis).toPromise() || new Devis();
    if (devis.id != id) return null;

    devis.client = await this.sClient.getData(<number>devis.clientId, URL_LIST.client).toPromise() || new Client();
    if (devis.client.id == 0) return null;

    devis.vehicule = await this.sVehicule.getData(<number>devis.vehiculeId, URL_LIST.vehicule).toPromise() || new Vehicule();
    if (devis.client.id == 0) return null;

    devis.utilisateur = await this.sUtilisateur.getData(<number>devis.utilisateurId, URL_LIST.utilisateur).toPromise() || new Utilisateur();
    if (devis.utilisateur.id == 0) return null;

    if (listeDevis) {
      listeDevis.push(devis)
    }
    return devis
  }

  async validateDevis(devis: Devis) {
    devis.etat = true;
    await this.sDevis.updateData(devis, URL_LIST.devis)
    let facture = new Facture();
    facture.devisId = devis.id;
    facture.vehiculeId = devis.vehiculeId;
    facture.dateCreation = new Date();
    facture.detail = `Facture pour ${devis.client?.nom} ${devis.client?.prenom} (${devis.vehicule?.marque} ${devis.vehicule?.modele})`;
    // @ts-ignore
    facture.montantTtc = devis.prixHt * (1 + facture.tauxTva / 100);
    await this.sFacture.addData(facture, URL_LIST.facture);
  }

  async invalidateDevis(devis: Devis) {
    devis.etat = false;
    await this.sDevis.updateData(devis, URL_LIST.devis);
    await this.sFacture.deleteData(devis.id, URL_LIST.facture);
  }

  async delete(devis: Devis) {
    // @ts-ignore
    devis.client?.devis_clientId = 0;
    if (devis.client instanceof Client) {
      await this.sClient.updateData(devis.client, URL_LIST.devis);
    }
    // @ts-ignore
    devis.vehicule?.devis_clientId = 0;
    if (devis.vehicule instanceof Vehicule) {
      await this.sVehicule.updateData(devis.vehicule, URL_LIST.vehicule);
    }
    await this.sDevis.deleteData(devis.id, URL_LIST.devis);

  }

}
