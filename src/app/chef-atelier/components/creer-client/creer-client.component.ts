import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/client';
@Component({
  selector: 'app-creer-client',
  templateUrl: './creer-client.component.html',
  styleUrls: ['./creer-client.component.scss']
})
export class CreerClientComponent implements OnInit {

  client!: Client;
  vForm = new FormGroup({

    nomControl: new FormControl('', [Validators.required]),

    // prenomControl: new FormControl(this.client.prenom, [Validators.required]),
    // emailControl: new FormControl(this.client.email, [
    //   Validators.required,
    //   Validators.minLength(4),
    //   Validators.pattern("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")]),

    // telephoneControl: new FormControl(this.client.telephone,
    //   [Validators.required,
    //   Validators.maxLength(10),
    //   Validators.pattern("^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$")
    //   ]
    // ),

    // mobileControl: new FormControl(this.client.mobile,
    //   [Validators.required,
    //   Validators.minLength(10),
    //   Validators.maxLength(10),
    //   Validators.pattern("^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$")
    //   ]
    // ),
    // adresseControl: new FormControl(this.client.adresse,
    //   [Validators.required,
    //   Validators.minLength(3)
    //   ]
    // ),
    // codePostalControl: new FormControl(this.client.codePostal,
    //   [Validators.required,
    //   Validators.minLength(4),
    //   Validators.maxLength(5),
    //   Validators.pattern("^[0-9]")
    //   ]
    // ),
    // villeControl: new FormControl(this.client.adresse,
    //   [Validators.required,
    //   Validators.minLength(2)
    //   ]
    // )
  });



  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  get nomControl() { return this.vForm.get('nomControl'); }

  onSubmit(): void {
    console.log(this.vForm.value);
  }

  private formValue(controlName: string) {
    // @ts-ignore
    return this.vForm.get(controlName).value;
  }




}
