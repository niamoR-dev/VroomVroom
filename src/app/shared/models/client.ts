import { Model } from "../../core/models/model";


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


  constructor(nom: string = '', prenom: string = '', adresse: string = '', codePostal: number = 0, ville: string = '', email: string = '', mobile: string = '', telephone: string = '', clientAtelier: boolean = false, clientVente: boolean = false) {
    super();
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.codePostal = codePostal;
    this.ville = ville;
    this.email = email;
    this.mobile = mobile;
    this.telephone = telephone;
    this.clientAtelier = clientAtelier;
    this.clientVente = clientVente;
  }


}
