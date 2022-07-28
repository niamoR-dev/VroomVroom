import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JointureFicheClient } from 'src/app/shared/models/jointureFicheClient';
import { redirectTo } from 'src/app/shared/utils/methods';
import { URL_LIST } from 'src/app/shared/utils/url.list';
import { ApiWebService } from 'src/app/shared/web-services/api.web-service';
import { APIFicheComplete } from 'src/app/shared/web-services/fiche-service ';
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
  pieces: any;
  fiche: any;
  id!: number;
  pieceAjouterParOuvrier!: any[];
  dataFromAPI: JointureFicheClient = new JointureFicheClient();
  //niveauDePriorite: PRIORITE;

  constructor(private formBuilder: FormBuilder, private service: ApiWebService<Tache>,
    private router: Router, private route: ActivatedRoute, private dataServiceTache: APIFicheComplete) { }




  async ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.dataFromAPI = await this.dataServiceTache.getFicheEntretienByTache(this.id) || new JointureFicheClient();

    this.initForm();
  }






  initForm() {

    this.tForm = this.formBuilder.group({

      infoClientControl: new FormControl(''),

      vehiculeClientControl: new FormControl(''),

      nomTacheControl: new FormControl(''),

      niveauPrioriteControl: new FormControl(''),

      tacheDescriptionControl: new FormControl(''),
      etatTacheControl: new FormControl(''),
      validationTacheControl: new FormControl(''),
      utilisateurNom: new FormControl(''),
      datePriseEnCharge: new FormControl(''),
      commentaireOuvrier: new FormControl(''),
      pieceUtiliseEnCharge: new FormControl(''),

    });
  }





  get infoClientControl() { return this.tForm.get('infoClientControl'); }
  get vehiculeClientControl() { return this.tForm.get('vehiculeClientControl'); }
  get nomTacheControl() { return this.tForm.get('nomTacheControl'); }
  get niveauPrioriteControl() { return this.tForm.get('niveauPrioriteControl'); }
  get tacheDescriptionControl() { return this.tForm.get('tacheDescriptionControl'); }
  get etatTacheControl() { return this.tForm.get('etatTacheControl'); }
  get validationTacheControl() { return this.tForm.get('validationTacheControl'); }
  get utilisateurNom() { return this.tForm.get('utilisateurNom'); }
  get datePriseEnCharge() { return this.tForm.get('datePriseEnCharge'); }
  get commentaireOuvrier() { return this.tForm.get('commentaireOuvrier'); }
  get pieceUtiliseEnCharge() { return this.tForm.get('pieceUtiliseEnCharge'); }


  onSubmit(): void {

    this.dataFromAPI.client.nom = this.infoClientControl?.value || '';
    this.dataFromAPI.vehicule.modele = this.vehiculeClientControl?.value;
    this.tache.email = this.nomTacheControl?.value;
    this.tache.telephone = this.niveauPrioriteControl?.value;
    this.tache.description = this.tacheDescriptionControl?.value;
    this.tache.adresse = this.etatTacheControl?.value;
    this.tache.codePostal = this.validationTacheControl?.value;
    this.utilisateur.nom = this.utilisateurNom?.value;
    this.utilisateur.nom = this.datePriseEnCharge?.value;
    this.utilisateur.nom = this.commentaireOuvrier?.value;
    this.utilisateur.nom = this.pieceUtiliseEnCharge?.value;

    //this.modifierClient(this.tache);

    redirectTo('chefAtelier/liste-tache', this.router)
  }

  modifierTache(tache: Tache) {
    this.service.addData(tache, URL_LIST.tache).subscribe({
      next: () => console.log(tache),
      error: err => console.log(`Erreur lors de l'ajout d'un nouveau client: ` + err),
      complete: () => console.log('Ajout d\'un client réussi')
    })
  }

  supprimerPiece(pieceId: number) {

    // il faut supprimer la tache de la liste d'affichage de l'HTML
  }

}
