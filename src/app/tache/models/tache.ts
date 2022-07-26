import { Model } from "../../core/models/model";

export class Tache extends Model {
  public description: string;
  public commentaire: string;
  public dateCreation: Date;
  public validationOuvrier: boolean;
  public validationChefAtelier: boolean;
  public prioriseParChefAtelier: boolean;
  public montant: number;

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
