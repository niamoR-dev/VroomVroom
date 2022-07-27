import { Tache } from "./tache";

export class JointureTache extends Tache {

  fiche!: [];

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
    montant: number,
    fiche: []
  ) {
    super(
      idUtilisateur,
      idPriorite,
      idFicheEntretien,
      idPiece,
      description,
      commentaire,
      dateCreation,
      validationOuvrier,
      validationChefAtelier,
      prioriseParChefAtelier,
      montant);
      this.fiche = fiche;
  }
}
