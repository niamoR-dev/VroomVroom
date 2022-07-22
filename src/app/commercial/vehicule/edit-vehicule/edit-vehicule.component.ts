import { Component, OnInit } from '@angular/core';
import { ApiWebService } from "../../../shared/web-services/api.web-service";
import { Vehicule } from "../../models/vehicule";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-vehicule',
  templateUrl: './edit-vehicule.component.html',
  styleUrls: ['./edit-vehicule.component.scss']
})
export class EditVehiculeComponent implements OnInit {

  id!: number;
  vehicule!: Vehicule;
  vForm!: FormGroup

  constructor(private service: ApiWebService<Vehicule>,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    // this.getVehicule(this.id);
    console.log('EDIT VEHICULE')

  }

  onSubmit(): void {
    this.vehicule.marque = this.formValue('marque');
    this.vehicule.modele = this.formValue('modele');
    this.vehicule.dateConstruction = this.formValue('date');
    this.vehicule.prixHt = this.formValue('prix');
    this.vehicule.quantite = this.formValue('quantite');
    console.log("coucoucoucoucuocuocuo", this.vehicule)
  }

  /**
   * Retrieve vehicle data with given ID and initialize form with it
   * @param id the customer ID
   */
  // private getVehicule(id: number) {
  //   this.service.getData(id, this.url).subscribe({
  //     next: data => {
  //       this.vehicule = data;
  //       this.createForm();
  //     },
  //     error: err => console.log(`Error while getting vehicle: ` + err),
  //     complete: () => console.log('Get vehicle completed')
  //   })
  // }

  private createForm() {
    // this.formBuilder = new FormGroup({
    //   marque: [this.vehicule.marque, [Validators.required, Validators.minLength(4)]],
    //   modele: [this.vehicule.modele, [Validators.required, Validators.minLength(4)]],
    //   dateConstruction: [this.vehicule.dateConstruction, [Validators.required,
    //     // Validators.pattern("/(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/gi")
    //   ]
    //   ],
    //   prixHt: [this.vehicule.prixHt, [Validators.required, Validators.pattern("^[0-9]*$")]],
    //   quantite: [this.vehicule.quantite, [Validators.required, Validators.pattern("^[0-9]*$")]],
    // })
  }

  /**
   * Gets the value of a given form control name
   * @param controlName the formControlName
   * @private
   */
  private formValue(controlName: string) {
    // @ts-ignore
    return this.vForm.get(controlName).value;
  }

}
