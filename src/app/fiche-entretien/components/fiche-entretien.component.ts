import {Component, OnInit} from '@angular/core';
import {Fiche} from "../models/fiche";
import {ApiWebService} from "../../shared/web-services/api.web-service";
import {URL_LIST} from "../../shared/utils/url.list";

@Component({
  selector: 'app-fiche-entretien',
  templateUrl: './fiche-entretien.component.html',
  styleUrls: ['./fiche-entretien.component.scss']
})
export class FicheEntretienComponent implements OnInit {
  fiches = new Array<Fiche>();

  constructor(private service: ApiWebService<Fiche>) {
  }

  ngOnInit(): void {
    this.getFiches()
  }

  private getFiches() {
    this.service.getAllData(URL_LIST.fiche).subscribe({
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
