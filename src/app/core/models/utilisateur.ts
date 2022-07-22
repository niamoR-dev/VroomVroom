import {Model} from "./model";

export class Utilisateur extends Model{
  private _idProfil!: number;
  private _login!: string;
  private _mdp!: string;


  constructor(idProfil: number, login: string, mdp: string, nom: string, prenom: string) {
    super();
    this._idProfil = idProfil;
    this._login = login;
    this._mdp = mdp;
    this._nom = nom;
    this._prenom = prenom;
  }

  get idProfil(): number {
    return this._idProfil;
  }

  set idProfil(value: number) {
    this._idProfil = value;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  get mdp(): string {
    return this._mdp;
  }

  set mdp(value: string) {
    this._mdp = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  private _nom!: string
  private _prenom!: string;
}
