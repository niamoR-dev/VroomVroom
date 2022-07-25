import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client';
import { redirectTo } from 'src/app/shared/utils/methods';
import { URL_LIST } from 'src/app/shared/utils/url.list';
import { ApiWebService } from 'src/app/shared/web-services/api.web-service';
@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.scss']
})
export class ModifierClientComponent implements OnInit {

  client!: Client;
  vForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: ApiWebService<Client>,
    private router: Router) { }


  ngOnInit(): void {
    this.initForm();

  }

  initForm() {

    this.vForm = this.formBuilder.group({

      nomControl: new FormControl('', [Validators.required]),

      prenomControl: new FormControl('', [Validators.required]),

      emailControl: new FormControl('', [
        Validators.required,
        Validators.minLength(4)]),

      telephoneControl: new FormControl('',
        [Validators.required,
        Validators.maxLength(10),
        ]
      ),

      mobileControl: new FormControl('',
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
        ]
      ),
      adresseControl: new FormControl('',
        [Validators.required,
        Validators.minLength(3)
        ]
      ),
      codePostalControl: new FormControl('',
        [Validators.required,
        Validators.minLength(4),
        Validators.maxLength(5)
        ]
      ),
      villeControl: new FormControl('',
        [Validators.required,
        Validators.minLength(2)
        ]
      )
    });
  }



  get nomControl() { return this.vForm.get('nomControl'); }

  get prenomControl() { return this.vForm.get('prenomControl'); }

  get emailControl() { return this.vForm.get('emailControl'); }

  get telephoneControl() { return this.vForm.get('telephoneControl'); }

  get mobileControl() { return this.vForm.get('mobileControl'); }

  get adresseControl() { return this.vForm.get('adresseControl'); }

  get codePostalControl() { return this.vForm.get('codePostalControl'); }

  get villeControl() { return this.vForm.get('villeControl'); }



  onSubmit(): void {

    this.client = new Client();

    this.client.nom = this.nomControl?.value;
    this.client.prenom = this.prenomControl?.value;
    this.client.email = this.emailControl?.value;
    this.client.telephone = this.telephoneControl?.value;
    this.client.mobile = this.mobileControl?.value;
    this.client.adresse = this.adresseControl?.value;
    this.client.codePostal = this.codePostalControl?.value;
    this.client.ville = this.villeControl?.value;

    this.createClient(this.client);

    redirectTo('chefAtelier/liste-clients', this.router)
  }

  createClient(client: Client) {
    this.service.addData(client, URL_LIST.client).subscribe({
      next: () => console.log(client),
      error: err => console.log(`Erreur lors de l'ajout d'un nouveau client: ` + err),
      complete: () => console.log('Ajout d\'un client réussi')
    })


  }

}
