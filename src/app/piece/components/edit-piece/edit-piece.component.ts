import { Component, OnInit } from '@angular/core';
import {Piece} from "../../models/piece";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {ActivatedRoute} from "@angular/router";
import {URL_LIST} from "../../../shared/utils/url.list";

@Component({
  selector: 'app-edit-piece',
  templateUrl: './edit-piece.component.html',
  styleUrls: ['./edit-piece.component.scss']
})
export class EditPieceComponent implements OnInit {
  id!: number;
  piece!: Piece;
  pForm!: FormGroup;

  constructor(private service: ApiWebService<Piece>,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getPiece(this.id)
  }

  onSubmit(): void {
    this.piece.libelle = this.formValue('libelle');
    this.piece.quantite = this.formValue('quantite');
    this.piece.dateSaisie = this.formValue('date');
  }

  private getPiece(id: number) {
    this.service.getData(id, URL_LIST.piece).subscribe({
      next: data => {
        this.piece = data;
        this.createForm();
      },
      error: err => console.log(`Error while getting vehicle: ` + err),
      complete: () => console.log('Get vehicle completed')
    })
  }

  private createForm() {
    this.pForm = this.formBuilder.group({
      marque: [this.piece.libelle, [Validators.required, Validators.minLength(4)]],
      modele: [this.piece.quantite, [Validators.required, Validators.minLength(4)]],
      prixHt: [this.piece.dateSaisie, [Validators.required, Validators.nullValidator]],
    })
  }

  /**
   * Gets the value of a given form control name
   * @param controlName the formControlName
   * @private
   */
  private formValue(controlName: string) {
    // @ts-ignore
    return this.pForm.get(controlName).value;
  }

}
