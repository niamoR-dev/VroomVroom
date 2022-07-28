import {Model} from "./model";


/**Classe model, on peut mettre les données en public */
export class Client extends Model {
  nom?: string;
  prenom?: string;
  adresse?: string;
  codePostal?: number;
  ville?: string;
  email?: string;
  mobile?: string;
  telephone?: string;
  clientAtelier?: boolean = false;
  clientVente?: boolean = false;
  fiche_entretienId?: number = 0;
  devis_clientId?: number = 0;


  constructor(nom?: string, prenom?: string, adresse?: string, codePostal?: number, ville?: string, email?: string, mobile?: string, telephone?: string, clientAtelier?: boolean, clientVente?: boolean, fiche_entretienId?: number, devis_clientId?: number) {
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
    this.fiche_entretienId = fiche_entretienId;
    this.devis_clientId = devis_clientId;
  }
}
