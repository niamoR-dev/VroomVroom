import { Fiche } from "./fiche";


export class JointureFicheClient extends Fiche {

  client!: [];


  constructor(idTache: number[], idUtilisateur: number, clientId: number, description: string, dateCreation: Date, dateCloture: Date, ficheTerminee: boolean, montantTtc: number, client: []) {
    super(idTache, idUtilisateur, clientId, description, dateCreation, dateCloture, ficheTerminee, montantTtc);
    this.client = client;
  }



}
