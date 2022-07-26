import { Model } from "../../core/models/model";

export class Fiche extends Model {

  tacheId!: number[];
  utilisateurId!: number;
  clientId!: number;
  description!: string;
  dateCreation!: Date;
  dateCloture!: Date;
  ficheTerminee!: boolean;
  montantTtc!: number;


  constructor(idTache: number[], idUtilisateur: number, clientId: number, description: string, dateCreation: Date, dateCloture: Date, ficheTerminee: boolean, montantTtc: number) {
    super();
    this.tacheId = idTache;
    this.utilisateurId = idUtilisateur;
    this.clientId = clientId;
    this.description = description;
    this.dateCreation = dateCreation;
    this.dateCloture = dateCloture;
    this.ficheTerminee = ficheTerminee;
    this.montantTtc = montantTtc;
  }

}
