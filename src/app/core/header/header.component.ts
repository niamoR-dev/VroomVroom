import { Component, OnInit } from '@angular/core';
import {LINK_LIST} from "../../shared/utils/link.list";
import {AuthService} from "../auth/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  listLinks = LINK_LIST;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  getRole() {
    return localStorage.getItem('ROLE');
  }

}
