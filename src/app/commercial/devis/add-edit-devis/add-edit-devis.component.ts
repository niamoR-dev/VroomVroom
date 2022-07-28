import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiWebService} from "../../../shared/web-services/api.web-service";
import {Vehicule} from "../../../shared/models/vehicule";
import {ActivatedRoute, Router} from "@angular/router";
import {Devis} from "../../../shared/models/devis";
import {Client} from "../../../shared/models/client";
import {URL_LIST} from "../../../shared/utils/url.list";
import {redirectTo} from "../../../shared/utils/methods";
import {DevisService} from "../services/devis.service";

@Component({
  selector: 'app-add-edit-devis',
  templateUrl: './add-edit-devis.component.html',
  styleUrls: ['./add-edit-devis.component.scss']
})
export class AddEditDevisComponent implements OnInit {
  devis = new Devis(0, 0, 0, undefined, undefined)
  clients = new Array<Client>();
  listeDevis = new Array<Devis>();
  vehicules = new Array<Vehicule>();
  vehicule!: Vehicule;
  client!: Client;
  prixHt: number | undefined;
  form!: FormGroup;
  isNew!: boolean;
  id!: number;

  constructor(private formBuilder: FormBuilder,
              private service: ApiWebService<Devis>,
              private devisService: DevisService,
              private clientService: ApiWebService<Client>,
              private vehiculeService: ApiWebService<Vehicule>,
              private route: ActivatedRoute,
              private router: Router) {
  }

  async ngOnInit() {
    this.getClients();
    this.getVehicules();
    this.getListDevis();
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
    this.updateClient(this.devis);
    this.updateVehicule(this.devis);
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

  updateClient(devis: Devis) {
    this.clients.filter(c => devis.clientId == c.id).map(c => this.client = c);
    if (!this.isNew) {
      this.client.devis_clientId = this.listeDevis[this.listeDevis.length - 1].id;
    } else {
      this.client.devis_clientId = this.listeDevis[this.listeDevis.length - 1].id + 1;
    }
    this.clientService.updateData(this.client, URL_LIST.client);
  }

  updateVehicule(devis: Devis) {
    this.vehicules.filter(v => devis.vehiculeId = v.id).map(v => this.vehicule = v);
    if (!this.isNew) {
      this.vehicule.devis_clientId = this.listeDevis[this.listeDevis.length - 1].id;
    } else {
      this.vehicule.devis_clientId = this.listeDevis[this.listeDevis.length - 1].id + 1;
    }
    this.vehiculeService.updateData(this.vehicule, URL_LIST.vehicule);
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


  /**
   * Get all devis from resolver
   */
  getListDevis() {
    this.route.data.subscribe({
      next: data => this.listeDevis = data['listeDevis'],
      error: err => console.log(`Erreur lors du fetch des liste de devis: ` + err),
      complete: () => console.log('Fetch liste de devis réussi')
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
