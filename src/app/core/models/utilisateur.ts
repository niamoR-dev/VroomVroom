import {Model} from "./model";

export class Utilisateur extends Model{
  private idProfil: number;
  private login: string;
  private mdp: string;


  constructor(idProfil: number, login: string, mdp: string) {
    super();
    this.idProfil = idProfil;
    this.login = login;
    this.mdp = mdp;
  }
}
