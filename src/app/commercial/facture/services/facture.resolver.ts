import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Facture} from "../../../shared/models/facture";
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {URL_LIST} from "../../../shared/utils/url.list";

@Injectable({
  providedIn: 'root'
})
export class FactureResolver implements Resolve<any> {
  constructor(private service: ApiWebService<Facture>) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.service.getAllData(URL_LIST.facture);
  }
}
