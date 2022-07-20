import {Model} from "../../core/models/model";

export class Vehicule extends Model {
  private _dateConstruction!: Date;
  private _marque!: string;
  private _modele!: string;
  private _prixHt!: number;
  private _quantite!: number;


  constructor(dateConstruction: Date, marque: string, modele: string, prixHt: number, quantite: number) {
    super();
    this._dateConstruction = dateConstruction;
    this._marque = marque;
    this._modele = modele;
    this._prixHt = prixHt;
    this._quantite = quantite;
  }


  get dateConstruction(): Date {
    return this._dateConstruction;
  }

  set dateConstruction(value: Date) {
    this._dateConstruction = value;
  }

  get marque(): string {
    return this._marque;
  }

  set marque(value: string) {
    this._marque = value;
  }

  get modele(): string {
    return this._modele;
  }

  set modele(value: string) {
    this._modele = value;
  }

  get prixHt(): number {
    return this._prixHt;
  }

  set prixHt(value: number) {
    this._prixHt = value;
  }

  get quantite(): number {
    return this._quantite;
  }

  set quantite(value: number) {
    this._quantite = value;
  }
}
