import { Component, OnInit } from '@angular/core';
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {Router} from "@angular/router";
import {URL_LIST} from "../../../shared/utils/url.list";
import {redirectTo} from "../../../shared/utils/methods";
import {JointureDevisClient} from "../../models/jointureDevisClient";

@Component({
  selector: 'app-list-devis',
  templateUrl: './list-devis.component.html',
  styleUrls: ['./list-devis.component.scss']
})
export class ListDevisComponent implements OnInit {
  devis = new Array<JointureDevisClient>();
  searchInput!: string;

  constructor(private service: ApiWebService<JointureDevisClient>,
              private router: Router) { }

  ngOnInit(): void {
    this.getDevis();
  }

  private getDevis() {
    this.service.getAllData(URL_LIST.jointureDevisClient).subscribe({
      next: data => {
        this.devis.splice(0, this.devis.length);
        data.forEach(p => {
          this.getVoitureDevis(p.clientId, p)
          this.devis.push(p)
        });
      },
      error: err => console.log('Erreur pendant le fetch des devis: ' + err),
      complete: () => console.log('Fetch des devis réussi')
    })
  }

  private getVoitureDevis(id: number | undefined, devis: JointureDevisClient){
    return this.service.getDataJointure(<number>id, URL_LIST.vehicule, URL_LIST.jointureVoiture).subscribe({
      next: data => {
        devis.vehicule = data;
      },
      error: err => console.log('Erreur pendant le fetch du véhicule: ' + err),
      complete: () => console.log('Fetch des véhicule réussi')
    })
  }

  deleteDevis(id: number){
    this.service.deleteData(id, URL_LIST.devis);
    redirectTo('commercial/devis', this.router)
  }

}
