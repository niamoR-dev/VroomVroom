import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {Utilisateur} from "../../models/utilisateur";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form = new FormGroup ({
    login: new FormControl('', [Validators.required, Validators.minLength(4)]),
    mdp: new FormControl('', [Validators.required, Validators.minLength(4)])
  })


    constructor(private service: ApiWebService<Utilisateur>,
                private route: ActivatedRoute,
                private router: Router) {
}

ngOnInit() {}

}
