import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Fiche } from '../models/fiche';
import { JointureFicheClient } from '../models/jointureFicheClient';
import { ApiWebService } from './api.web-service';
import { Client } from '../models/client';
import { Tache } from '../components/tache/models/tache';
import { Utilisateur } from '../models/utilisateur';
import { Vehicule } from '../models/vehicule';
import { URL_LIST } from '../utils/url.list';

@Injectable({
  providedIn: 'root'
})
/**
 * Main service for API calls for different objects
 */
export class APIFicheComplete {


  constructor(private http: HttpClient, private sFiche: ApiWebService<Fiche>, private sClient: ApiWebService<Client>,
    private sVehicule: ApiWebService<Vehicule>, private sUtilisateur: ApiWebService<Utilisateur>,
    private sTache: ApiWebService<Tache>) {

  }



  // a partir d'une fiche, si elle existe, de la charger, d'aller chercher toutes les info fiches (ID)
  // URL embed à aprtir de la fiche


  async getFicheEntretien(id: number) {

    let jfc: JointureFicheClient;
    jfc = new JointureFicheClient();

    jfc.fiche = await this.sFiche.getData(id, URL_LIST.fiche).toPromise() || new Fiche();
    if (jfc.fiche.id != id) return null;

    jfc.client = await this.sClient.getData(jfc.fiche.clientId, URL_LIST.client).toPromise() || new Client();
    if (jfc.client.id == 0) return null;

    jfc.vehicule = await this.sVehicule.getData(jfc.fiche.vehiculeId, URL_LIST.vehicule).toPromise() || new Vehicule();
    if (jfc.vehicule.id == 0) return null;

    jfc.utilisateur = await this.sUtilisateur.getData(jfc.fiche.utilisateurId, URL_LIST.utilisateur).toPromise() || new Utilisateur();
    if (jfc.utilisateur.id == 0) return null;

    //'fiche_entretien/1/?_embed=tache'
    jfc.taches = await this.sTache.getAllData(`fiche/${id}/?_embed=tache`).toPromise() || new Array<Tache>();

    return jfc;

  }

  async getFicheEntretienByTache(id: number) {

    let jfc: JointureFicheClient | null;
    jfc = new JointureFicheClient();

    let tache: Tache | null;

    tache = await this.sTache.getData(id, URL_LIST.tache).toPromise() || null;
    if (tache == null) return null;

    jfc = await this.getFicheEntretien(tache.ficheId);


    return jfc;

  }

}
