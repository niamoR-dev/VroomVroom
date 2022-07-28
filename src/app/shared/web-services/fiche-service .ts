import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Client } from '../models/client';
import { Vehicule } from 'src/app/chef-atelier/models/vehicule';
import { Utilisateur } from 'src/app/core/models/utilisateur';

@Injectable({
  providedIn: 'root'
})
/**
 * Main service for API calls for different objects
 */
export class APIFicheComplete {

  client!: Client;
  vehicule!: Vehicule;
  utilsateur!: Utilisateur;


  constructor(private http: HttpClient) {
  }



  // a partir d'une fiche, si elle existe, de la charger, d'aller chercher toutes les info fiches (ID)
  // URL embed à aprtir de la fiche

}
