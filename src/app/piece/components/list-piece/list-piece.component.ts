import { Component, OnInit } from '@angular/core';
import {Piece} from "../../models/piece";
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {URL_LIST} from "../../../shared/utils/url.list";
import {Router} from "@angular/router";
import {redirectTo} from "../../../shared/utils/methods";

@Component({
  selector: 'app-list-piece',
  templateUrl: './list-piece.component.html',
  styleUrls: ['./list-piece.component.scss']
})
export class ListPieceComponent implements OnInit {
  pieces = new Array<Piece>();
  searchInput!: string;

  constructor(private service: ApiWebService<Piece>,
              private router: Router) { }

  ngOnInit(): void {
    this.getPieces();
  }

  deletePiece(id: number) {
    this.service.deleteData(id, URL_LIST.piece);
    redirectTo('chefAtelier/stock-pieces', this.router)
  }

  private getPieces() {
    this.service.getAllData(URL_LIST.piece).subscribe({
      next: data => {
        this.pieces.splice(0, this.pieces.length);
        data.forEach(p => {
          this.pieces.push(p)
        });
      },
      error: err => console.log('Error while getting pieces: ' + err),
      complete: () => console.log('Getting pieces complete')
    })
  }

}
