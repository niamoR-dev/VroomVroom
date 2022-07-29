import { Model } from "./model";

export class Utilisateur extends Model {
  idProfil?: number | 0;
  login?: string | '';
  mdp?: string | '';
  nom?: string | ''
  prenom?: string | '';
}
