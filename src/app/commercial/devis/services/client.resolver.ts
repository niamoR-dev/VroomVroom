import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {Client} from "../../../shared/models/client";
import {URL_LIST} from "../../../shared/utils/url.list";

@Injectable({
  providedIn: 'root'
})
export class ClientResolver implements Resolve<any> {
  constructor(private service: ApiWebService<Client>) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.service.getAllData(URL_LIST.client)
  }
}
