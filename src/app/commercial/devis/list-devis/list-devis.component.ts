import { Component, OnInit } from '@angular/core';
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {ActivatedRoute, Router} from "@angular/router";
import {URL_LIST} from "../../../shared/utils/url.list";
import {Devis} from "../../../shared/models/devis";
import {DevisService} from "../services/devis.service";
import {redirectTo} from "../../../shared/utils/methods";
import {DevisJointure} from "../../../shared/models/devisJointure";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-devis',
  templateUrl: './list-devis.component.html',
  styleUrls: ['./list-devis.component.scss', '../../../app.component.scss']
})
export class ListDevisComponent implements OnInit {
  devis = new Array<DevisJointure>();
  listeDevis = new Array<Devis>();
  searchInput!: string;

  constructor(private service: ApiWebService<DevisJointure>,
              private devisService: DevisService,
              private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.getDevisResolver();
    this.getAllDevis(this.listeDevis)
  }

  private getDevisResolver() {
    this.route.data.subscribe({
      next: data => this.listeDevis = data['listeDevis'],
      error: err => console.log(`Erreur lors du fetch des liste de devis: ` + err),
      complete: () => console.log('Fetch liste de devis réussi')
    })
  }

  private getAllDevis(devis: DevisJointure[]){
    devis.forEach(d => {
      this.devisService.getDevis(d.id, this.devis)
    })
  }

  async changeEtat(devis: DevisJointure) {
    if(devis.etat == true){
      this.devisService.invalidateDevis(devis);
    } else {
      let facture = this.devisService.validateDevis(devis);
      await this.http.post(environment.gateway + URL_LIST.facture, facture).toPromise();
    }
    redirectTo('commercial/devis', this.router)
  }

  async deleteDevis(devis: Devis) {
    await this.devisService.delete(devis);
    redirectTo('commercial/devis', this.router)
  }

}
