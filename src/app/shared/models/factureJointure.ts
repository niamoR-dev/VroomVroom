import {Facture} from "./facture";
import {DevisJointure} from "./devisJointure";

export class FactureJointure extends Facture {
  devis?: DevisJointure | null;
}
