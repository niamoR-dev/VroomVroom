import { Component, OnInit } from '@angular/core';
import {Vehicule} from "../models/vehicule";
import {ApiWebService} from "../../shared/web-services/api.web-service";

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})
export class VehiculeComponent implements OnInit {
  vehiculeUrl = "vehicule";
  vehicules = new Array<Vehicule>();

  constructor(private service: ApiWebService<Vehicule>) {
  }

  ngOnInit(): void {
    this.getVehicules();
  }

  getVehicules() {
    this.service.getAllData(this.vehiculeUrl).subscribe({
      next: data => {
        this.vehicules.splice(0, this.vehicules.length);
        data.forEach(v => this.vehicules.push(v))
      }
    })
  }

}
