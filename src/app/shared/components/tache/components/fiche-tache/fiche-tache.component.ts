import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { redirectTo } from 'src/app/shared/utils/methods';
import { URL_LIST } from 'src/app/shared/utils/url.list';
import { ApiWebService } from 'src/app/shared/web-services/api.web-service';
import { Tache } from '../../models/tache';

@Component({
  selector: 'app-fiche-tache',
  templateUrl: './fiche-tache.component.html',
  styleUrls: ['./fiche-tache.component.scss']
})
export class FicheTacheComponent implements OnInit {


  tForm!: FormGroup;
  tache: any;
  client: any;
  utilisateur: any;
  vehicule: any;
  //niveauDePriorite: PRIORITE;

  constructor(private formBuilder: FormBuilder, private service: ApiWebService<Tache>,
    private router: Router) { }



  ngOnInit(): void {
    this.initForm();

  }



  initForm() {

    this.tForm = this.formBuilder.group({

      infoClientControl: new FormControl('', [Validators.required]),

      vehiculeClientControl: new FormControl('', [Validators.required]),

      nomTacheControl: new FormControl('', [
        Validators.required,
        Validators.minLength(4)]),

      niveauPrioriteControl: new FormControl('',
        [Validators.required,
        Validators.maxLength(10),
        ]
      ),

      tacheDescriptionControl: new FormControl('',
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
        ]
      ),
      etatTacheControl: new FormControl('',
        [Validators.required,
        Validators.minLength(3)
        ]
      ),
      validationTacheControl: new FormControl('',
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



  get infoClientControl() { return this.tForm.get('infoClientControl'); }

  get vehiculeClientControl() { return this.tForm.get('vehiculeClientControl'); }

  get nomTacheControl() { return this.tForm.get('nomTacheControl'); }

  get niveauPrioriteControl() { return this.tForm.get('niveauPrioriteControl'); }

  get tacheDescriptionControl() { return this.tForm.get('tacheDescriptionControl'); }

  get etatTacheControl() { return this.tForm.get('etatTacheControl'); }

  get validationTacheControl() { return this.tForm.get('validationTacheControl'); }

  get villeControl() { return this.tForm.get('villeControl'); }



  onSubmit(): void {


    this.tache.nom = this.infoClientControl?.value;
    this.tache.prenom = this.vehiculeClientControl?.value;
    this.tache.email = this.nomTacheControl?.value;
    this.tache.telephone = this.niveauPrioriteControl?.value;
    this.tache.mobile = this.tacheDescriptionControl?.value;
    this.tache.adresse = this.etatTacheControl?.value;
    this.tache.codePostal = this.validationTacheControl?.value;
    this.tache.ville = this.villeControl?.value;

    //this.modifierClient(this.tache);

    redirectTo('chefAtelier/gestion-tache', this.router)
  }

  // modifierClient(tache: Tache) {
  //   this.service.addData(tache, URL_LIST.tache).subscribe({
  //     next: () => console.log(tache),
  //     error: err => console.log(`Erreur lors de l'ajout d'un nouveau client: ` + err),
  //     complete: () => console.log('Ajout d\'un client réussi')
  //   })


}


