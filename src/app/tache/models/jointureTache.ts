import { Tache } from "./tache";

export class JointureTache extends Tache {

  tache!: [];


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
    montant: number
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
      this.tache = this.tache;
  }



}
