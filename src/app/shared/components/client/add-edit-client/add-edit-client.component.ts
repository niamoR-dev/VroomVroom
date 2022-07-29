import { Component, OnInit } from '@angular/core';
import { Client } from "../../../models/client";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiWebService } from "../../../web-services/api.web-service";
import { ActivatedRoute, Router } from "@angular/router";
import { URL_LIST } from "../../../utils/url.list";
import { redirectTo } from "../../../utils/methods";

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.scss']
})
export class AddEditClientComponent implements OnInit {
  client: Client = new Client();
  form!: FormGroup;
  isNew!: boolean;
  id!: number;

  constructor(private formBuilder: FormBuilder,
    private service: ApiWebService<Client>,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isNew = !this.id
    if (!this.isNew) {
      this.getClient(this.id)
    }
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.minLength(4)]),
      telephone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
      adresse: new FormControl('', [Validators.required, Validators.minLength(3)]),
      codePostal: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(5)]),
      ville: new FormControl('', [Validators.required, Validators.minLength(2)])
    })
  }

  onSubmit(isNew: boolean) {
    this.client.nom = this.nomControl?.value;
    this.client.prenom = this.prenomControl?.value;
    this.client.email = this.emailControl?.value;
    this.client.telephone = this.telephoneControl?.value;
    this.client.mobile = this.mobileControl?.value;
    this.client.adresse = this.adresseControl?.value;
    this.client.codePostal = this.codePostalControl?.value;
    this.client.ville = this.villeControl?.value;
    if (!isNew) {
      this.service.updateData(this.client, URL_LIST.client)
    } else {
      this.addClient(this.client)
    }
    redirectTo('commercial/clients', this.router)
  }

  get nomControl() { return this.form.get('nom'); }

  get prenomControl() { return this.form.get('prenom'); }

  get emailControl() { return this.form.get('email'); }

  get telephoneControl() { return this.form.get('telephone'); }

  get mobileControl() { return this.form.get('mobile'); }

  get adresseControl() { return this.form.get('adresse'); }

  get codePostalControl() { return this.form.get('codePostal'); }

  get villeControl() { return this.form.get('ville'); }

  private addClient(client: Client) {
    this.service.addData(client, URL_LIST.client).subscribe({
      next: () => console.log(client),
      error: err => console.log(`Erreur lors de l'ajout d'un nouveau client: ` + err),
      complete: () => console.log('Ajout d\'un client réussi')
    })
  }

  private getClient(id: number) {
    this.service.getData(id, URL_LIST.client).subscribe({
      next: data => {
        this.client = data;
      },
      error: err => console.log(`Erreur lors du fetch d'un nouveau client: ` + err),
      complete: () => console.log('Fetch de client réussi')
    })
  }

}
