import { Piece } from "../components/piece/models/piece";
import { Tache } from "../components/tache/models/tache";
import { Client } from "./client";
import { Fiche } from "./fiche";
import { Utilisateur } from "./utilisateur";
import { Vehicule } from "./vehicule";

export class JointureFicheClient {

  client: Client = new Client();
  vehicule: Vehicule = new Vehicule();
  utilisateur: Utilisateur = new Utilisateur();
  taches: Tache[] = new Array<Tache>();
  fiche: Fiche = new Fiche();
  piece: Piece = new Piece();




}
