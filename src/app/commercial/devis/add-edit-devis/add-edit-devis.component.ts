import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {Vehicule} from "../../../shared/models/vehicule";
import {ActivatedRoute, Router} from "@angular/router";
import {Devis} from "../../models/devis";
import {Client} from "../../../shared/models/client";
import {URL_LIST} from "../../../shared/utils/url.list";
import {redirectTo} from "../../../shared/utils/methods";

@Component({
  selector: 'app-add-edit-devis',
  templateUrl: './add-edit-devis.component.html',
  styleUrls: ['./add-edit-devis.component.scss']
})
export class AddEditDevisComponent implements OnInit {
  devis = new Devis();
  clients = new Array<Client>();
  vehicules = new Array<Vehicule>();
  prixHt: number | undefined;
  form!: FormGroup;
  isNew!: boolean;
  id!: number;

  constructor(private formBuilder: FormBuilder,
              private service: ApiWebService<Devis>,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getClients();
    this.getVehicules();
    this.id = this.route.snapshot.params['id'];
    this.isNew = !this.id
    if (!this.isNew) {
      this.getDevis(this.id)
    }
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      client: new FormControl('', [Validators.required]),
      // utilisateur: new FormControl('', [Validators.required, Validators.minLength(3)]),
      vehicule: new FormControl('', [Validators.required, Validators.minLength(2)]),
      prixHt: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(isNew: boolean) {
    this.devis.clientId = this.clientControl?.value;
    // this.devis.utilisateurId = this.utilisateurControl?.value;
    this.devis.vehiculeId = this.vehiculeControl?.value;
    this.devis.prixHt = this.prixControl?.value;
    if (!isNew) {
      this.service.updateData(this.devis, URL_LIST.devis);
    } else {
      this.addDevis(this.devis);
    }

    redirectTo('commercial/devis', this.router)
  }

  private getDevis(id: number) {
    this.service.getData(id, URL_LIST.devis).subscribe({
      next: data => {
        this.devis = data;
      },
      error: err => console.log(`Erreur lors du fetch d'un devis: ` + err),
      complete: () => console.log('Fetch de devis réussi')
    })
  }

  private addDevis(devis: Devis) {
    this.service.addData(devis, URL_LIST.devis).subscribe({
      next: () => console.log(devis),
      error: err => console.log(`Erreur lors de l'ajout d'un nouveau devis: ` + err),
      complete: () => console.log('Ajout d\'un devis réussi')
    })
  }

  /**
   * Get all clients from resolver
   */
  getClients() {
    this.route.data.subscribe({
      next: data => this.clients = data['clients'],
      error: err => console.log(`Erreur lors du fetch des clients: ` + err),
      complete: () => console.log('Fetch clienst réussi')
    })
  }

  /**
   * Get all vehicles from resolver
   */
  getVehicules() {
    this.route.data.subscribe({
      next: data => this.vehicules = data['vehicules'],
      error: err => console.log(`Erreur lors du fetch des vehicules: ` + err),
      complete: () => console.log('Fetch vehicules réussi')
    })
  }

  get clientControl() {
    return this.form.get('client');
  }

  get utilisateurControl() {
    return this.form.get('utilisateur');
  }

  get vehiculeControl() {
    return this.form.get('vehicule');
  }

  get prixControl() {
    return this.form.get('prixHt');
  }

}
