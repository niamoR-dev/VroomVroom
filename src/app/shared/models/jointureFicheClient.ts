import { Tache } from "../components/tache/models/tache";
import { Client } from "./client";
import { Fiche } from "./fiche";
import { Utilisateur } from "./utilisateur";
import { Vehicule } from "./vehicule";

export class JointureFicheClient extends Fiche {

  client?: Client;
  vehicule?: Vehicule;
  utilsateur?: Utilisateur;
  taches?: Tache[];


  constructor(idTache?: number[], idUtilisateur?: number, clientId?: number, description?: string, dateCreation?: Date, dateCloture?: Date, ficheTerminee?: boolean, montantTtc?: number, client?: Client) {
    super(idTache, idUtilisateur, clientId, description, dateCreation, dateCloture, ficheTerminee, montantTtc);
    this.client = client;
  }



}
