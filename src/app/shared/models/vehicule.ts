import {Model} from "./model";

export class Vehicule extends Model {
  dateConstruction?: Date;
  marque?: string | '';
  modele?: string | '';
  prixHt?: number | '';
  devis_clientId?: number | 0;
  isUsed?: boolean | false;
}
