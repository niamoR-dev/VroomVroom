import { Model } from "../../../models/model";

export class Tache extends Model {
  description: string;
  commentaire: string;
  dateCreation: Date;
  validationOuvrier: boolean;
  validationChefAtelier: boolean;
  prioriseParChefAtelier: boolean;
  montant: number;

  constructor(description: string, commentaire: string, dateCreation: Date, validationOuvrier: boolean, validationChefAtelier: boolean, prioriseParChefAtelier: boolean, montant: number) {
    super();
    this.description = description;
    this.commentaire = commentaire;
    this.dateCreation = dateCreation;
    this.validationOuvrier = validationOuvrier;
    this.validationChefAtelier = validationChefAtelier;
    this.prioriseParChefAtelier = prioriseParChefAtelier;
    this.montant = montant;
  }

}
