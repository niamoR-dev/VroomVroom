import { Model } from "../../../models/model";

export class Tache extends Model {
  nom: string;
  description: string;
  commentaire: string;
  dateCreation: Date;
  validationOuvrier: boolean;
  validationChefAtelier: boolean;
  prioriseParChefAtelier: boolean;
  montant: number;
  ficheId: number = 0;

  constructor(nom: string, description: string, commentaire: string, dateCreation: Date, validationOuvrier: boolean, validationChefAtelier: boolean, prioriseParChefAtelier: boolean, montant: number, ficheId: number) {
    super();
    this.nom = nom;
    this.description = description;
    this.commentaire = commentaire;
    this.dateCreation = dateCreation;
    this.validationOuvrier = validationOuvrier;
    this.validationChefAtelier = validationChefAtelier;
    this.prioriseParChefAtelier = prioriseParChefAtelier;
    this.montant = montant;
    this.ficheId = ficheId;
  }

}
