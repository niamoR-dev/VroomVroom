import {Component, OnInit} from '@angular/core';
import {Piece} from "../../models/piece";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {ActivatedRoute, Router} from "@angular/router";
import {URL_LIST} from "../../../shared/utils/url.list";
import {redirectTo} from "../../../shared/utils/methods";

@Component({
  selector: 'app-edit-piece',
  templateUrl: './edit-piece.component.html',
  styleUrls: ['./edit-piece.component.scss']
})
export class EditPieceComponent implements OnInit {
  id!: number;
  piece!: Piece;
  form!: FormGroup

  constructor(private service: ApiWebService<Piece>,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getPiece(this.id)
  }


  initForm() {
    this.form = this.formBuilder.group({
      libelle: new FormControl('', [Validators.required, Validators.minLength(4)]),
      quantite: new FormControl('', Validators.required),
      dateSaisie: new FormControl('', Validators.required)
    })
  }

  get libelleControl() {
    return this.form.get('libelle')
  }

  get quantiteControl() {
    return this.form.get('quantite')
  }

  get dateControl() {
    return this.form.get('dateSaisie')
  }


  onSubmit(): void {
    this.piece.libelle = this.libelleControl?.value;
    this.piece.quantite = this.quantiteControl?.value;
    this.piece.dateSaisie = this.dateControl?.value;
    this.service.updateData(this.piece, URL_LIST.piece);
    redirectTo('chefAtelier/stock-pieces', this.router)
  }

  private getPiece(id: number) {
    this.service.getData(id, URL_LIST.piece).subscribe({
      next: data => {
        this.piece = data;
        this.initForm()
      },
      error: err => console.log(`Error while getting piece: ` + err),
      complete: () => console.log('Get piece completed')
    })
  }

}
