import {Component, OnInit} from '@angular/core';
import {Vehicule} from "../../../models/vehicule";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiWebService} from "../../../web-services/api.web-service";
import {ActivatedRoute, Router} from "@angular/router";
import {URL_LIST} from "../../../utils/url.list";
import {redirectTo} from "../../../utils/methods";

@Component({
  selector: 'app-add-edit-vehicule',
  templateUrl: './add-edit-vehicule.component.html',
  styleUrls: ['./add-edit-vehicule.component.scss', '../../../../app.component.scss']
})
export class AddEditVehiculeComponent implements OnInit {
  vehicule: Vehicule = new Vehicule();
  form!: FormGroup;
  isNew!: boolean;
  id!: number;

  constructor(private formBuilder: FormBuilder,
              private service: ApiWebService<Vehicule>,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isNew = !this.id
    if (!this.isNew) {
      this.getVehicule(this.id)
    }
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      dateConstruction: new FormControl('', [Validators.required]),
      marque: new FormControl('', [Validators.required, Validators.minLength(3)]),
      modele: new FormControl('', [Validators.required, Validators.minLength(2)]),
      prixHt: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(isNew: boolean) {
    this.vehicule.dateConstruction = this.dateControl?.value;
    this.vehicule.marque = this.marqueControl?.value;
    this.vehicule.modele = this.modeleControl?.value;
    this.vehicule.prixHt = this.prixControl?.value;
    if (!isNew) {
      this.service.updateData(this.vehicule, URL_LIST.vehicule);
    } else {
      this.addVehicule(this.vehicule)
    }
    redirectTo('commercial/stock-vehicules', this.router)
  }

  get marqueControl() {
    return this.form.get('marque')
  }

  get modeleControl() {
    return this.form.get('modele')
  }

  get prixControl() {
    return this.form.get('prixHt')
  }

  get quantiteControl() {
    return this.form.get('quantite')
  }

  get dateControl() {
    return this.form.get('dateConstruction')
  }



  private addVehicule(vehicule: Vehicule) {
    this.service.addData(vehicule, URL_LIST.vehicule).subscribe({
      next: () => console.log(vehicule),
      error: err => console.log(`Erreur lors de l'ajout d'un nouveau véhicule: ` + err),
      complete: () => console.log('Ajout d\'un véhicule réussi')
    })
  }

  private getVehicule(id: number) {
    this.service.getData(id, URL_LIST.vehicule).subscribe({
      next: data => {
        this.vehicule = data;
      },
      error: err => console.log(`Erreur lors du fetch d'un nouveau véhicule: ` + err),
      complete: () => console.log('Fetch de véhicule réussi')
    })
  }

}
