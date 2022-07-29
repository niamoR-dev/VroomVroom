import {Model} from "./model";

export class Devis extends Model {
  clientId?: number | 0;
  utilisateurId?: number | 0;
  vehiculeId?: number | 0;
  dateCreation?: Date | undefined = new Date();
  etat?: boolean | false;
  prixHt?: number | 0;
  tauxTva?: number | 20;
  montantTtc?: number | 0;

}
