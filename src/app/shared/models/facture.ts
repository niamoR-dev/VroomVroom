import {Model} from "./model";

export class Facture extends Model {
  devisId?: number | 0;
  vehiculeId?: number | 0;
  detail?: string | '';
  dateCreation?: Date;
  montantTtc?: number | 0;
  tauxTva?: 20;
}
