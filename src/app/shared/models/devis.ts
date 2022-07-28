import {Model} from "./model";

export class Devis extends Model {
  clientId?: number;
  utilisateurId?: number;
  vehiculeId?: number;
  dateCreation: Date;
  etat: boolean = false;
  prixHt?: number;
  tauxTva?: number;
  montantTtc?: number;


  constructor(clientId?: number, vehiculeId?: number, prixHt?: number) {
    super();
    this.clientId = clientId;
    this.utilisateurId = 4;
    this.vehiculeId = vehiculeId;
    this.dateCreation = new Date();
    this.etat = false;
    this.prixHt = prixHt;
    this.tauxTva = 20;
    // @ts-ignore
    this.montantTtc = this.prixHt * (1 + (this.tauxTva / 100))
  }
}
