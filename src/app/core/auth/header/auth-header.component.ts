import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {LINK_LIST} from "../../../shared/utils/link.list";

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss', '../../../app.component.scss']
})
export class AuthHeaderComponent implements OnInit {
  listLinks = LINK_LIST;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  getRole() {
    return localStorage.getItem('ROLE');
  }
}
