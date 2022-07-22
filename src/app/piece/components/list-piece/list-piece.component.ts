import { Component, OnInit } from '@angular/core';
import {Piece} from "../../models/piece";
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {URL_LIST} from "../../../shared/utils/url.list";

@Component({
  selector: 'app-list-piece',
  templateUrl: './list-piece.component.html',
  styleUrls: ['./list-piece.component.scss']
})
export class ListPieceComponent implements OnInit {
  pieces = new Array<Piece>();

  constructor(private service: ApiWebService<Piece>) { }

  ngOnInit(): void {
    this.getPieces();
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
