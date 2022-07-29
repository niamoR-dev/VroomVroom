import { Model } from "../../../models/model";

export class Piece extends Model {

  public dateSaisie: Date = new Date();
  public libelle: string = "";
  public quantite: number = 0;

}
