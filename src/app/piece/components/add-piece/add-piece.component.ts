import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {Piece} from "../../models/piece";
import {Router} from "@angular/router";
import {URL_LIST} from "../../../shared/utils/url.list";
import {redirectTo} from "../../../shared/utils/methods";

@Component({
  selector: 'app-add-piece',
  templateUrl: './add-piece.component.html',
  styleUrls: ['./add-piece.component.scss']
})
export class AddPieceComponent implements OnInit {
  form = new FormGroup({
    libelle: new FormControl('', [Validators.required, Validators.minLength(4)]),
    quantite: new FormControl('', [Validators.required]),
    dateSaisie: new FormControl('', [Validators.required])
  })

  constructor(private formBuilder: FormBuilder,
              private service: ApiWebService<Piece>,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let pieceData = this.form.value
    this.addPiece(pieceData.libelle, pieceData.quantite, pieceData.dateSaisie);
    redirectTo('chefAtelier/stock-pieces', this.router)
  }

  private addPiece(libelle: string, quantite: number, dateSaisie: Date): void {
    let piece = new Piece(dateSaisie, libelle, quantite);
    this.service.addData(piece, URL_LIST.piece).subscribe({
      next: () => console.log(piece),
      error: err => console.log(`Error while adding piece: ` + err),
      complete: () => console.log('Add piece completed')
    })
  }

}
