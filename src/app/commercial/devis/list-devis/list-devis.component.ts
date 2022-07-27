import { Component, OnInit } from '@angular/core';
import {Devis} from "../../models/devis";
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {Router} from "@angular/router";
import {URL_LIST} from "../../../shared/utils/url.list";
import {redirectTo} from "../../../shared/utils/methods";

@Component({
  selector: 'app-list-devis',
  templateUrl: './list-devis.component.html',
  styleUrls: ['./list-devis.component.scss']
})
export class ListDevisComponent implements OnInit {
  devis = new Array<Devis>();
  searchInput!: string;

  constructor(private service: ApiWebService<Devis>,
              private router: Router) { }

  ngOnInit(): void {
    this.getDevis();
  }

  private getDevis() {
    this.service.getAllData(URL_LIST.devis).subscribe({
      next: data => {
        this.devis.splice(0, this.devis.length);
        data.forEach(p => {
          this.devis.push(p)
        });
      },
      error: err => console.log('Erreur pendant le fetch des devis: ' + err),
      complete: () => console.log('Fetch des devis réussi')
    })
  }

  deleteDevis(id: number){
    this.service.deleteData(id, URL_LIST.devis);
    redirectTo('commercial/devis', this.router)
  }

}
