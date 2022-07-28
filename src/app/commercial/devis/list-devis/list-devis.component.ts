import { Component, OnInit } from '@angular/core';
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {ActivatedRoute, Router} from "@angular/router";
import {URL_LIST} from "../../../shared/utils/url.list";
import {Devis} from "../../../shared/models/devis";
import {DevisService} from "../services/devis.service";
import {redirectTo} from "../../../shared/utils/methods";

@Component({
  selector: 'app-list-devis',
  templateUrl: './list-devis.component.html',
  styleUrls: ['./list-devis.component.scss', '../../../app.component.scss']
})
export class ListDevisComponent implements OnInit {
  devis = new Array<Devis>();
  listeDevis = new Array<Devis>();
  searchInput!: string;

  constructor(private service: ApiWebService<Devis>,
              private devisService: DevisService,
              private route: ActivatedRoute,
              private router: Router) { }

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

  private getAllDevis(devis: Devis[]){
    devis.forEach(d => {
      this.devisService.getDevis(d.id, this.devis)
    })
  }

  private getVoitureDevis(id: number | undefined, devis: Devis){
    return this.service.getDataJointure(<number>id, URL_LIST.vehicule, URL_LIST.jointureVoiture).subscribe({
      next: data => {
        devis.vehicule = data;
      },
      error: err => console.log('Erreur pendant le fetch du véhicule: ' + err),
      complete: () => console.log('Fetch des véhicule réussi')
    })
  }
  //
  // deleteDevis(id: number){
  //   this.service.deleteData(id, URL_LIST.devis);
  //   redirectTo('commercial/devis', this.router)
  // }


  deleteDevis(devis: Devis) {
    this.devisService.delete(devis);
    redirectTo('commercial/devis', this.router)
  }

}
