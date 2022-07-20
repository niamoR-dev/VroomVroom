import { Component, OnInit } from '@angular/core';
import {LINK_LIST} from "../../shared/utils/link.list";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listLinks = LINK_LIST;



  constructor() { }

  ngOnInit(): void {
  }

}
