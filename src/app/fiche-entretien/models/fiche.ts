import {Model} from "../../core/models/model";

export class Fiche extends Model {

      private _idTache!: number[];
      private _idUtilisateur!: number;
      private _idClient!: number;
      private _description!: string;
      private _dateCreation!: Date;
      private _dateCloture!: Date;
      private _ficheTerminee!: boolean;
      private _montantTtc!: number;


  constructor(idTache: number[], idUtilisateur: number, idClient: number, description: string, dateCreation: Date, dateCloture: Date, ficheTerminee: boolean, montantTtc: number) {
    super();
    this._idTache = idTache;
    this._idUtilisateur = idUtilisateur;
    this._idClient = idClient;
    this._description = description;
    this._dateCreation = dateCreation;
    this._dateCloture = dateCloture;
    this._ficheTerminee = ficheTerminee;
    this._montantTtc = montantTtc;
  }


  get idTache(): number[] {
    return this._idTache;
  }

  set idTache(value: number[]) {
    this._idTache = value;
  }

  get idUtilisateur(): number {
    return this._idUtilisateur;
  }

  set idUtilisateur(value: number) {
    this._idUtilisateur = value;
  }

  get idClient(): number {
    return this._idClient;
  }

  set idClient(value: number) {
    this._idClient = value;
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
