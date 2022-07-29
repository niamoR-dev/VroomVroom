import { Component, OnInit } from '@angular/core';
import { ApiWebService } from "../../../../web-services/api.web-service";
import { URL_LIST } from "../../../../utils/url.list";
import { JointureFicheClient } from "../../../../models/jointureFicheClient";
import { APIFicheComplete } from 'src/app/shared/web-services/fiche-complete.web-service ';
import { Fiche } from 'src/app/shared/models/fiche';

@Component({
  selector: 'app--liste-fiches-entretien',
  templateUrl: './liste-fiches-entretien.component.html',
  styleUrls: ['./liste-fiches-entretien.component.scss']
})
export class ListeFichesEntretienComponent implements OnInit {
  fiches: any;
  searchInput!: string;

  constructor(private serviceAPI: ApiWebService<Fiche>) {
  }

  ngOnInit(): void {
    this.getFiches()
  }

  private getFiches() {
    this.serviceAPI.getAllData(URL_LIST.jointureFicheClient).subscribe({
      next: data => {
        this.fiches = data;
      },
      error: err => console.log('Error while getting fiches: ' + err),
      complete: () => console.log('Getting fiches complete')
    })
  }

}
