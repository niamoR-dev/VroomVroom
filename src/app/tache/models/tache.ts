import { Model } from "../../core/models/model";

export class Tache extends Model {
  utilisateurId: number;
  prioriteId: number;
  ficheEntretienId: number;
  pieceId: number;
  description: string;
  commentaire: string;
  dateCreation: Date;
  validationOuvrier: boolean;
  validationChefAtelier: boolean;
  prioriseParChefAtelier: boolean;
  montant: number;

  constructor(
    idUtilisateur: number,
    idPriorite: number,
    idFicheEntretien: number,
    idPiece: number,
    description: string,
    commentaire: string,
    dateCreation: Date,
    validationOuvrier: boolean,
    validationChefAtelier: boolean,
    prioriseParChefAtelier: boolean,
    montant: number) {
      super();
      this.utilisateurId = idUtilisateur;
      this.prioriteId = idPriorite;
      this.ficheEntretienId = idFicheEntretien;
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
