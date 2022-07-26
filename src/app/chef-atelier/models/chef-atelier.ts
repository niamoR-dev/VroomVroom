import {Utilisateur} from "../../core/models/utilisateur";

export class ChefAtelier extends Utilisateur {
  override set _idProfil(value: number) {
    super.idProfil = 5;
  }
}
