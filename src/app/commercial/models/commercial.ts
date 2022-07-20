import {Utilisateur} from "../../core/models/utilisateur";

export class Commercial extends Utilisateur {
  override set idProfil(value: number) {
    super.idProfil = 4;
  }
}
