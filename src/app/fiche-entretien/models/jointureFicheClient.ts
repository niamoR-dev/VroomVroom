import {Fiche} from "./fiche";

export class JointureFicheClient extends Fiche {

  private _client!: [];


  constructor(idTache: number[], idUtilisateur: number, clientId: number, description: string, dateCreation: Date, dateCloture: Date, ficheTerminee: boolean, montantTtc: number, client: []) {
    super(idTache, idUtilisateur, clientId, description, dateCreation, dateCloture, ficheTerminee, montantTtc);
    this._client = client;
  }


  get client(): [] {
    return this._client;
  }

  set client(value: []) {
    this._client = value;
  }
}
