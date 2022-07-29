import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiWebService } from "../../../shared/web-services/api.web-service";
import { Utilisateur } from "../../../shared/models/utilisateur";
import { AuthService } from "../services/auth.service";
import { Roles } from "../enum/role";
import { Router } from "@angular/router";
import { redirectTo } from "../../../shared/utils/methods";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  form!: FormGroup


  constructor(private service: ApiWebService<Utilisateur>,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    this.initForm()
  }

  onSubmit(): void {
    let userData = this.form.value
    this.authService.loginFilter(userData.login, userData.mdp)
    if (localStorage.getItem('ROLE') == Roles.CHEF_ATELIER) {
      redirectTo('chefAtelier', this.router);
    }
    if (localStorage.getItem('ROLE') == Roles.COMMERCIAL || Roles.ADMIN) {
      redirectTo('commercial/devis', this.router);
    }
  }

  initForm(): void {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(4)]),
      mdp: new FormControl('', [Validators.required, Validators.minLength(4)]),
    })
  }

}
