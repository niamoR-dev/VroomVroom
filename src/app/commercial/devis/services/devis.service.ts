import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {Client} from "../../../shared/models/client";
import {Vehicule} from "../../../shared/models/vehicule";
import {URL_LIST} from "../../../shared/utils/url.list";
import {Devis} from "../../../shared/models/devis";
import {Utilisateur} from "../../../shared/models/utilisateur";
import {Facture} from "../../../shared/models/facture";
import {DevisJointure} from "../../../shared/models/devisJointure";

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

  async getDevis(id: number, listeDevis?: DevisJointure[]) {
    let devis: DevisJointure;

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

  validateDevis(devisJointure: DevisJointure) {
    devisJointure.etat = true;
    let facture = this.createFactureFromDevis(devisJointure);
    let devis = this.cancelJointure(devisJointure)
    this.sDevis.updateData(devis, URL_LIST.devis)
    return facture
  }

  invalidateDevis(devisJointure: Devis) {
    devisJointure.etat = false;
    let devis = this.cancelJointure(devisJointure);
    this.sDevis.updateData(devis, URL_LIST.devis);
    this.sFacture.deleteData(devisJointure.id, URL_LIST.facture);
  }

  async delete(devis: DevisJointure) {
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

  cancelJointure(devisJointure: DevisJointure) {
    let devis = new Devis();
    devis.id = devisJointure.id;
    devis.clientId = devisJointure.clientId;
    devis.vehiculeId = devisJointure.vehiculeId;
    devis.utilisateurId = devisJointure.utilisateurId;
    devis.dateCreation = devisJointure.dateCreation;
    devis.etat = devisJointure.etat;
    devis.prixHt = devisJointure.prixHt;
    devis.tauxTva = devisJointure.tauxTva;
    devis.montantTtc = devisJointure.montantTtc;
    return devis;
  }

  createFactureFromDevis(devisJointure: DevisJointure) {
    let facture = new Facture();
    facture.devisId = devisJointure.id;
    facture.vehiculeId = devisJointure.vehiculeId;
    facture.detail = `Facture pour ${devisJointure.client?.nom} ${devisJointure.client?.prenom} (${devisJointure.vehicule?.marque} ${devisJointure.vehicule?.modele})`;
    facture.dateCreation = new Date();
    facture.tauxTva = 20;
    // @ts-ignore
    facture.montantTtc = devisJointure.prixHt * (1 + facture.tauxTva / 100)
    return facture;
  }
}
