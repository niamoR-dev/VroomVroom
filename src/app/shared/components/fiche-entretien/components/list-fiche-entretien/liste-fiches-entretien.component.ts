import { Component, OnInit } from "@angular/core";
import { Fiche } from "src/app/shared/models/fiche";
import { URL_LIST } from "src/app/shared/utils/url.list";
import { ApiWebService } from "src/app/shared/web-services/api.web-service";


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
