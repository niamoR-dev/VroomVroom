import { Component, OnInit } from '@angular/core';
import { Vehicule } from "../../../models/vehicule";
import { ApiWebService } from "../../../web-services/api.web-service";
import { Router } from "@angular/router";
import { URL_LIST } from "../../../utils/url.list";
import { redirectTo } from "../../../utils/methods";

@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.scss']
})
export class ListVehiculeComponent implements OnInit {
  vehicules = new Array<Vehicule>();
  searchInput!: string;

  constructor(private service: ApiWebService<Vehicule>,
    private router: Router) { }

  ngOnInit(): void {
    this.getVehicules();
  }

  private getVehicules() {
    this.service.getAllData(URL_LIST.vehicule).subscribe({
      next: data => {
        this.vehicules.splice(0, this.vehicules.length);
        data.forEach(p => {
          this.vehicules.push(p)
        });
      },
      error: err => console.log('Error while getting vehicle: ' + err),
      complete: () => console.log('Getting vehicle complete')
    })
  }

  deleteVehicule(id: number) {
    this.service.deleteData(id, URL_LIST.vehicule)
    redirectTo('commercial/stock-vehicules', this.router)
  }
}
