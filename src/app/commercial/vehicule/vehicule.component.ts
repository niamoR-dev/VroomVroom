import { Component, OnInit } from '@angular/core';
import {Vehicule} from "../models/vehicule";
import {ApiWebService} from "../../shared/web-services/api.web-service";
import {URL_LIST} from "../../shared/utils/url.list";

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})
export class VehiculeComponent implements OnInit {
  vehicules = new Array<Vehicule>();

  constructor(private service: ApiWebService<Vehicule>) {
  }

  ngOnInit(): void {
    this.getVehicules();
  }

  getVehicules() {
    this.service.getAllData(URL_LIST.vehicule).subscribe({
      next: data => {
        this.vehicules.splice(0, this.vehicules.length);
        data.forEach(v => this.vehicules.push(v));
      },
      error: err => console.log('Error while getting vehicules: ' + err),
      complete: () => console.log('Getting vehicules complete')
    })
  }

}
