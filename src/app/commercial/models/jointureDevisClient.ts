import {Devis} from "./devis";
import {Client} from "../../shared/models/client";
import {Vehicule} from "../../shared/models/vehicule";

export class JointureDevisClient extends Devis {
  client?: [Client]
  vehicule?: Vehicule


  constructor(clientId: number, utilisateurId: number, vehiculeId: number, prixHt: number, tauxTva: number, montatTtc: number, client?: [Client], vehicule?: Vehicule) {
    super(clientId, utilisateurId, vehiculeId, prixHt, tauxTva, montatTtc);
    this.client = client;
    this.vehicule = vehicule;
  }
}
