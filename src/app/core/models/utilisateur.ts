import {Model} from "./model";

export class Utilisateur extends Model{
  public idProfil: number;
  public login: string;
  public mdp: string;


  constructor(idProfil: number, login: string, mdp: string) {
    super();
    this.idProfil = idProfil;
    this.login = login;
    this.mdp = mdp;
  }


  set _idProfil(value: number) {
    this.idProfil = value;
  }
}
