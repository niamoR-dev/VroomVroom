import { Model } from "./model";

export class Utilisateur extends Model {
  idProfil!: number;
  login!: string;
  mdp!: string;
  nom!: string
  prenom!: string;

  constructor(idProfil: number = 0, login: string = '', mdp: string = '', nom: string = '', prenom: string = '') {
    super();
    this.idProfil = idProfil;
    this.login = login;
    this.mdp = mdp;
    this.nom = nom;
    this.prenom = prenom;
  }

  // set _idProfil(value: number) {
  //   this.idProfil = value;
  // }

}
