import { Injectable } from '@angular/core';
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {Devis} from "../../models/devis";
import {Client} from "../../../shared/models/client";
import {Vehicule} from "../../../shared/models/vehicule";

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  constructor(private devisService: ApiWebService<Devis>,
              private clientService: ApiWebService<Client>,
              private vehiculeService: ApiWebService<Vehicule>,) { }


}
