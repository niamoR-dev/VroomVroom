import { Model } from "./model";


/**Classe model, on peut mettre les données en public */
export class Client extends Model {
  nom!: string;
  prenom!: string;
  adresse!: string;
  codePostal!: number;
  ville!: string;
  email!: string;
  mobile!: string;
  telephone!: string;
  clientAtelier!: boolean;
  clientVente!: boolean;

}
