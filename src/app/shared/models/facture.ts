import {Model} from "./model";
import {Devis} from "./devis";
import {Vehicule} from "./vehicule";
import {Client} from "./client";

export class Facture extends Model {
  devisId?: number | 0;
  vehiculeId?: number | 0;
  detail?: string | '';
  dateCreation?: Date;
  montantTtc?: number | 0;
  tauxTva?: 20;
  devis?: Devis | null;
  vehicule?: Vehicule | null;
  client?: Client | null;
}
