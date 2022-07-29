import { Model } from "../../../models/model";

export class Tache extends Model {

  ficheId: number = 0;
  utilisateurId: number = 0;
  prioriteId: number = 0;
  pieceId: number = 0;
  nomTache: string = "";
  description: string = "";
  commentaire: string = "";
  quantite: number = 0;
  montant: number = 0;
  dateCreation: Date = new Date();
  validationOuvrier: boolean = false;
  validationChefAtelier: boolean = false;
  prioriseParChefAtelier: boolean = false;
  selectionneParOuvrier: boolean = false;
}
