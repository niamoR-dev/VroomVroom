import {Model} from "../../core/models/model";

export class Devis extends Model {
  clientId?: number;
  utilisateurId?: number;
  vehiculeId?: number;
  dateCreation: Date;
  etat: boolean = false;
  prixHt?: number;
  tauxTva?: number = 20;
  montatTtc?: number;


  constructor(clientId?: number, utilisateurId?: number, vehiculeId?: number, prixHt?: number, tauxTva?: number, montatTtc?: number) {
    super();
    this.clientId = clientId;
    this.utilisateurId = utilisateurId;
    this.vehiculeId = vehiculeId;
    this.dateCreation = new Date();
    this.etat = false;
    this.prixHt = prixHt;
    this.tauxTva = tauxTva;
    this.montatTtc = montatTtc;
  }
}
