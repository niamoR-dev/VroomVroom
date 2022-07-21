import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/client';
@Component({
  selector: 'app-creer-client',
  templateUrl: './creer-client.component.html',
  styleUrls: ['./creer-client.component.scss']
})
export class CreerClientComponent implements OnInit {

  vForm!: FormGroup;
  client!: Client;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.vForm = this.formBuilder.group({
      nom: [this.client.nom, [Validators.required]],
      prenom: [this.client.prenom, [Validators.required]],
      email: [this.client.email, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")]],
      telephone: [this.client.telephone,
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern("^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$")
      ],
      mobile: [this.client.mobile,
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern("^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$")
      ],
      adresse: [this.client.adresse,
      Validators.required,
      Validators.minLength(3)
      ],
      codePostal: [this.client.codePostal,
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(5),
      Validators.pattern("^[0-9]")
      ],
      ville: [this.client.adresse,
      Validators.required,
      Validators.minLength(2)
      ]
    })
  }

  onSubmit(): void {
    console.log(this.formValue('nom'));
  }

  private formValue(controlName: string) {
    // @ts-ignore
    return this.vForm.get(controlName).value;
  }

}
