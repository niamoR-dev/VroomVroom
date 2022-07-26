import {Model} from "./model";

export class Role extends Model {
  libelle: string


  constructor(libelle: string) {
    super();
    this.libelle = libelle;
  }
}
