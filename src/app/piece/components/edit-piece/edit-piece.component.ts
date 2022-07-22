import { Component, OnInit } from '@angular/core';
import { Piece } from "../../models/piece";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiWebService } from "../../../shared/web-services/api.web-service";
import { ActivatedRoute, Router } from "@angular/router";
import { URL_LIST } from "../../../shared/utils/url.list";

@Component({
  selector: 'app-edit-piece',
  templateUrl: './edit-piece.component.html',
  styleUrls: ['./edit-piece.component.scss']
})
export class EditPieceComponent implements OnInit {
  id!: number;
  piece!: Piece;
  form = new FormGroup({
    libelle: new FormControl('', [Validators.required, Validators.minLength(4)]),
    quantite: new FormControl('', [Validators.required]),
    dateSaisie: new FormControl('', [Validators.required])
  })

  constructor(private service: ApiWebService<Piece>,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getPiece(this.id)
  }

  onSubmit(): void {
    this.piece.libelle = this.formValue('libelle');
    this.piece.quantite = this.formValue('quantite');
    this.piece.dateSaisie = this.formValue('dateSaisie');
    this.service.updateData(this.piece, URL_LIST.piece);
    this.router.navigate([''])
  }

  private getPiece(id: number) {
    this.service.getData(id, URL_LIST.piece).subscribe({
      next: data => {
        this.piece = data;
      },
      error: err => console.log(`Error while getting piece: ` + err),
      complete: () => console.log('Get piece completed')
    })
  }

  /**
   * Gets the value of a given form control name
   * @param controlName the formControlName
   * @private
   */
  private formValue(controlName: string) {
    // @ts-ignore
    return this.form.get(controlName).value;
  }

}
