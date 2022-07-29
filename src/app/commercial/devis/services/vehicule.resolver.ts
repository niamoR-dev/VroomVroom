import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ApiWebService } from "../../../shared/web-services/api.web-service";
import { URL_LIST } from "../../../shared/utils/url.list";
import { Vehicule } from "../../../shared/models/vehicule";

@Injectable({
  providedIn: 'root'
})
export class VehiculeResolver implements Resolve<any> {
  constructor(private service: ApiWebService<Vehicule>) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.service.getAllData(URL_LIST.vehicule)
  }
}
