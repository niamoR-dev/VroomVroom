import {Model} from "../../core/models/model";

export class Piece extends Model {
  public dateSaisie!: Date;
  public libelle!: string;
  public quantite!: number;

  constructor(dateSaisie: Date, libelle: string, quantite: number) {
    super();
    this.dateSaisie = dateSaisie;
    this.libelle = libelle;
    this.quantite = quantite;
  }

}
