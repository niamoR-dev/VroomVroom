import {Model} from "./model";
import {Client} from "./client";
import {Vehicule} from "./vehicule";
import {Utilisateur} from "./utilisateur";

export class Devis extends Model {
  clientId?: number;
  utilisateurId?: number;
  vehiculeId?: number;
  dateCreation?: Date | undefined = new Date();
  etat?: boolean;
  prixHt?: number;
  tauxTva?: number;
  montantTtc?: number;
  client?: Client;
  vehicule?: Vehicule;
  utilisateur?: Utilisateur;


  constructor(clientId?: number, vehiculeId?: number, prixHt?: number, client?: Client, vehicule?: Vehicule, utilisateur?: Utilisateur) {
    super();
    this.clientId = clientId;
    this.utilisateurId = 4;
    this.vehiculeId = vehiculeId;
    this.dateCreation = new Date();
    this.etat = false;
    this.prixHt = prixHt || 0;
    this.tauxTva = 20;
    // @ts-ignore
    this.montantTtc = prixHt * (1 + (this.tauxTva / 100))
    this.client = client;
    this.vehicule = vehicule;
    this.utilisateur = utilisateur;
  }
}
