import {Devis} from "./devis";
import {Client} from "./client";
import {Vehicule} from "./vehicule";
import {Utilisateur} from "./utilisateur";

export class DevisJointure extends Devis {
  client?: Client | null;
  vehicule?: Vehicule | null;
  utilisateur?: Utilisateur | null;

}
