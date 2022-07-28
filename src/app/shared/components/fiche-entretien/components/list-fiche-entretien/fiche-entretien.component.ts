import { Component, OnInit } from '@angular/core';
import { ApiWebService } from "../../../../web-services/api.web-service";
import { URL_LIST } from "../../../../utils/url.list";
import { JointureFicheClient } from "../../../../models/jointureFicheClient";
import { APIFicheComplete } from 'src/app/shared/web-services/fiche-service ';

@Component({
  selector: 'app-fiche-entretien',
  templateUrl: './fiche-entretien.component.html',
  styleUrls: ['./fiche-entretien.component.scss']
})
export class FicheEntretienComponent implements OnInit {
  fiches = new Array<JointureFicheClient>();
  searchInput!: string;

  constructor(private service: ApiWebService<JointureFicheClient>, private sFicheEntretien: APIFicheComplete) {
  }

  ngOnInit(): void {
    this.getFiches();
    console.log("coucou", this.sFicheEntretien.getFicheEntretien(1))
  }

  private getFiches() {
    this.service.getAllData(URL_LIST.jointureFicheClient).subscribe({
      next: data => {
        this.fiches.splice(0, this.fiches.length);
        data.forEach(f => {
          this.fiches.push(f)
        });
      },
      error: err => console.log('Error while getting fiches: ' + err),
      complete: () => console.log('Getting fiches complete')
    })
  }

}
