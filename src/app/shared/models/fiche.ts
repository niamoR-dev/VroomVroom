import { Model } from "./model";

export class Fiche extends Model {

  tacheId?: number[];
  utilisateurId: number = 0;
  clientId: number = 0;
  vehiculeId: number = 0;
  description: string = "";
  dateCreation?: Date;
  dateCloture?: Date;
  ficheTerminee?: boolean;
  montantTtc?: number;


  constructor(idTache?: number[], idUtilisateur?: number, clientId?: number, description?: string, dateCreation?: Date, dateCloture?: Date, ficheTerminee?: boolean, montantTtc?: number, vehiculeId?: number) {
    super();
    this.tacheId = idTache;
    this.utilisateurId = idUtilisateur || 0;
    this.clientId = clientId || 0;
    this.description = description || "";
    this.dateCreation = dateCreation;
    this.dateCloture = dateCloture;
    this.ficheTerminee = ficheTerminee;
    this.montantTtc = montantTtc;
    this.vehiculeId = vehiculeId || 0;
  }

}
