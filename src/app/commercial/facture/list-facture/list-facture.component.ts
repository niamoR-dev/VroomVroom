import { Component, OnInit } from '@angular/core';
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {ActivatedRoute} from "@angular/router";
import {Facture} from "../../../shared/models/facture";
import {FactureService} from "../services/facture.service";
import {FactureJointure} from "../../../shared/models/factureJointure";

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.scss']
})
export class ListFactureComponent implements OnInit {
  listeFactures = new Array<Facture>();
  factures = new Array<FactureJointure>();
  searchInput!: string;

  constructor(private service: ApiWebService<Facture>,
              private factureService: FactureService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    this.getFacturesResolver();
    this.getAllFactures(this.listeFactures);
    console.log(this.factures)
  }

  getFacturesResolver() {
    this.route.data.subscribe({
      next: data => this.listeFactures = data['listeFactures'],
      error: err => console.log(`Erreur lors du fetch de liste des factures: ` + err),
      complete: () => console.log('Fetch liste de factures réussi')
    })
  }

  private getAllFactures(factures: Facture[]) {
    factures.forEach(f => {
      this.factureService.getFacture(f.id, this.factures)
    })
  }
}
