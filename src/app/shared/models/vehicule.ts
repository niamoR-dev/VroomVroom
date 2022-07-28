import {Model} from "./model";

export class Vehicule extends Model {
  dateConstruction?: Date;
  marque?: string;
  modele?: string;
  prixHt?: number;
  devis_clientId?: number;

  constructor(dateConstruction?: Date, marque?: string , modele?: string, prixHt?: number) {
    super();
    this.dateConstruction = dateConstruction;
    this.marque = marque;
    this.modele = modele;
    this.prixHt = prixHt;
    this.devis_clientId = 0;
  }
}
