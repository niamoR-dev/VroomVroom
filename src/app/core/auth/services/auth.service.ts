import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Utilisateur} from "../../models/utilisateur";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {URL_LIST} from "../../../shared/utils/url.list";

const ANONYMOUS_USER = <any> {
  isAnonymous: true,
  username: 'Anonymous User'
}
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

}
