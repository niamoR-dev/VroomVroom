import {Model} from "../../core/models/model";

export class Fiche extends Model {

      private _tacheId!: number[];
      private _utilisateurId!: number;
      private _clientId!: number;
      private _description!: string;
      private _dateCreation!: Date;
      private _dateCloture!: Date;
      private _ficheTerminee!: boolean;
      private _montantTtc!: number;


  constructor(idTache: number[], idUtilisateur: number, clientId: number, description: string, dateCreation: Date, dateCloture: Date, ficheTerminee: boolean, montantTtc: number) {
    super();
    this._tacheId = idTache;
    this._utilisateurId = idUtilisateur;
    this._clientId = clientId;
    this._description = description;
    this._dateCreation = dateCreation;
    this._dateCloture = dateCloture;
    this._ficheTerminee = ficheTerminee;
    this._montantTtc = montantTtc;
  }


  get idTache(): number[] {
    return this._tacheId;
  }

  set idTache(value: number[]) {
    this._tacheId = value;
  }

  get idUtilisateur(): number {
    return this._utilisateurId;
  }

  set idUtilisateur(value: number) {
    this._utilisateurId = value;
  }

  get clientId(): number {
    return this._clientId;
  }

  set clientId(value: number) {
    this._clientId = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get dateCreation(): Date {
    return this._dateCreation;
  }

  set dateCreation(value: Date) {
    this._dateCreation = value;
  }

  get dateCloture(): Date {
    return this._dateCloture;
  }

  set dateCloture(value: Date) {
    this._dateCloture = value;
  }

  get ficheTerminee(): boolean {
    return this._ficheTerminee;
  }

  set ficheTerminee(value: boolean) {
    this._ficheTerminee = value;
  }

  get montantTtc(): number {
    return this._montantTtc;
  }

  set montantTtc(value: number) {
    this._montantTtc = value;
  }
}
