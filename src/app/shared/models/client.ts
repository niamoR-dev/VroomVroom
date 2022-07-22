import { Model } from "../../core/models/model";

export class Client extends Model {
  private _nom!: string;
  private _prenom!: string;
  private _adresse!: string;
  private _codePostal!: number;
  private _ville!: string;
  private _email!: string;
  private _mobile!: string;
  private _telephone!: string;
  private _clientAtelier!: boolean;
  private _clientVente!: boolean;


  constructor(nom: string, prenom: string, adresse: string, codePostal: number, ville: string, email: string, mobile: string, telephone: string, clientAtelier: boolean, clientVente: boolean) {
    super();
    this._nom = nom;
    this._prenom = prenom;
    this._adresse = adresse;
    this._codePostal = codePostal;
    this._ville = ville;
    this._email = email;
    this._mobile = mobile;
    this._telephone = telephone;
    this._clientAtelier = clientAtelier;
    this._clientVente = clientVente;
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

  get adresse(): string {
    return this._adresse;
  }

  set adresse(value: string) {
    this._adresse = value;
  }

  get codePostal(): number {
    return this._codePostal;
  }

  set codePostal(value: number) {
    this._codePostal = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get mobile(): string {
    return this._mobile;
  }

  set mobile(value: string) {
    this._mobile = value;
  }

  get telephone(): string {
    return this._telephone;
  }

  set telephone(value: string) {
    this._telephone = value;
  }

  get clientAtelier(): boolean {
    return this._clientAtelier;
  }

  set clientAtelier(value: boolean) {
    this._clientAtelier = value;
  }

  get clientVente(): boolean {
    return this._clientVente;
  }

  set clientVente(value: boolean) {
    this._clientVente = value;
  }
}
