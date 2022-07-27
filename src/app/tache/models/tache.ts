import { Model } from "../../core/models/model";

export class Tache extends Model {
  utilisateurId: number;
  prioriteId: number;
  ficheId: number;
  pieceId: number;
  description: string;
  commentaire: string;
  dateCreation: Date;
  validationOuvrier: boolean;
  validationChefAtelier: boolean;
  prioriseParChefAtelier: boolean;
  montant: number;

  constructor(
    idUtilisateur: number = 0,
    idPriorite: number = 0,
    idFiche: number = 0,
    idPiece: number = 0,
    description: string = '',
    commentaire: string = '',
    dateCreation: Date = new Date,
    validationOuvrier: boolean = false,
    validationChefAtelier: boolean = false,
    prioriseParChefAtelier: boolean = false,
    montant: number = 0) {
      super();
      this.utilisateurId = idUtilisateur;
      this.prioriteId = idPriorite;
      this.ficheId = idFiche;
      this.pieceId = idPiece;
      this.description = description;
      this.commentaire = commentaire;
      this.dateCreation = dateCreation;
      this.validationOuvrier = validationOuvrier;
      this.validationChefAtelier = validationChefAtelier;
      this.prioriseParChefAtelier = prioriseParChefAtelier;
      this.montant = montant;
  }

}
