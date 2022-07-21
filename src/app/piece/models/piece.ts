import {Model} from "../../core/models/model";

export class Piece extends Model {
  private _dateSaisie!: Date;
  private _libelle!: string;
  private _quantite!: number;


  constructor(dateSaisie: Date, libelle: string, quantite: number) {
    super();
    this._dateSaisie = dateSaisie;
    this._libelle = libelle;
    this._quantite = quantite;
  }


  get dateSaisie(): Date {
    return this._dateSaisie;
  }

  set dateSaisie(value: Date) {
    this._dateSaisie = value;
  }

  get libelle(): string {
    return this._libelle;
  }

  set libelle(value: string) {
    this._libelle = value;
  }

  get quantite(): number {
    return this._quantite;
  }

  set quantite(value: number) {
    this._quantite = value;
  }
}
