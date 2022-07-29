import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {Devis} from "../../../shared/models/devis";
import {URL_LIST} from "../../../shared/utils/url.list";

@Injectable({
  providedIn: 'root'
})
export class DevisResolver implements Resolve<any> {
  constructor(private service: ApiWebService<Devis>) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.service.getAllData(URL_LIST.devis);
  }
}
