import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {URL_LIST} from "../../../shared/utils/url.list";
import {redirectTo} from "../../../shared/utils/methods";
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {Utilisateur} from "../../../shared/models/utilisateur";
import {Role} from "../../../shared/models/role";

const ANONYMOUS_USER = <Utilisateur> {
  login: 'Anonymous',
  idProfil: 0
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Authentification management
   * @protected
   */
  protected authenticatedUser: BehaviorSubject<Utilisateur> = new BehaviorSubject<Utilisateur>(ANONYMOUS_USER);

  constructor(private http: HttpClient,
              private router: Router,
              private service: ApiWebService<Role>) {
  }


  public login(username: string, password: string): Observable<Utilisateur | null> {
    const params = new HttpParams().set('username', username).set('password', password);
    console.log('login');
    return this.http.get<Utilisateur[]>(environment.gateway + URL_LIST.utilisateur, {params}).pipe(map(user => {
      if (user.length === 1) {
        let newLogin = user[0];
        if(<number>newLogin.idProfil > 0) {
          this.service.getData(<number>newLogin.idProfil, URL_LIST.role).subscribe(
            data => localStorage.setItem('ROLE', <string>data.libelle)
          )
        }
        this.authenticatedUser.next(newLogin);
        console.log(localStorage.getItem('ROLE'))
        redirectTo('', this.router)
        return newLogin;
      } else {
        this.authenticatedUser.next(ANONYMOUS_USER);
        redirectTo('', this.router)
        return null;
      }
    }));
  }

  public loginFilter(username: string, password: string): void {
    this.http.get<Utilisateur[]>(environment.gateway + URL_LIST.utilisateur).pipe(
      map(logins => logins.filter(
        login => {
          return login.login === username && login.mdp === password;
        }
      ))
    ).subscribe({
      next: logins => {
        if (logins.length === 1) {
          let newLogin = logins[0];
          console.log(newLogin)
          if(<number>newLogin.idProfil > 0) {
            this.service.getData(<number>newLogin.idProfil, URL_LIST.role).subscribe(
              data => localStorage.setItem('ROLE', <string>data.libelle)
            )
          }
          this.authenticatedUser.next(logins[0]);
          redirectTo('', this.router)
        }
        else {
          this.authenticatedUser.next(ANONYMOUS_USER);
          redirectTo('', this.router)
        }
        console.log(localStorage.getItem('ROLE'))
      },
      error: err => console.log(`Error while getting data ${URL_LIST.utilisateur}: ` + err)
    })
  }

  public logout(): void {
    console.log('logout access');
    this.authenticatedUser.next(ANONYMOUS_USER);
    localStorage.clear()
    redirectTo('', this.router)
  }

  public getAuthenticatedUser(): Observable<Utilisateur>{
    return this.authenticatedUser;
  }


  canActivate(): boolean {
    let found = false;
    this.getAuthenticatedUser().subscribe(login => {if (login.login == 'Anonymous')
      found = true
    });
    return !found;
  }
}
