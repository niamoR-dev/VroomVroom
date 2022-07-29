import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JointureFicheClient } from 'src/app/shared/models/jointureFicheClient';
import { redirectTo } from 'src/app/shared/utils/methods';
import { URL_LIST } from 'src/app/shared/utils/url.list';
import { ApiWebService } from 'src/app/shared/web-services/api.web-service';
import { APIFicheComplete } from 'src/app/shared/web-services/fiche-complete.web-service';
import { Tache } from '../../models/tache';

@Component({
  selector: 'app-fiche-tache',
  templateUrl: './fiche-tache.component.html',
  styleUrls: ['./fiche-tache.component.scss']
})
export class FicheTacheComponent implements OnInit {


  tForm!: FormGroup;

  idTache!: number;
  pieceAjouterParOuvrier!: any[];
  dataFromAPI: JointureFicheClient = new JointureFicheClient();
  dataTache: any;
  pieces: any;
  niveauDePriorite!: string;

  constructor(private formBuilder: FormBuilder, private service: ApiWebService<Tache>,
    private router: Router, private route: ActivatedRoute, private dataServiceTache: APIFicheComplete) { }




  async ngOnInit() {

    this.idTache = this.route.snapshot.params['id'];

    this.dataFromAPI = await this.dataServiceTache.getFicheEntretienByTache(this.idTache) || new JointureFicheClient();
    console.log("DATA FROM API ---------", this.dataFromAPI)
    this.getDataTache(this.idTache);
    this.initForm();

  }


  getDataTache(idTache: number) {
    this.dataTache = this.service.getData(idTache, URL_LIST.tache).subscribe({
      next: data => {
        this.dataTache = data;
        console.log("DATA de TACHE ---------", data)
      },
      error: err => console.log(`Error while getting piece: ` + err),
      complete: () => console.log('Get piece completed')
    })
  }


  initForm() {

    this.tForm = new FormGroup({

      infoClientControl: new FormControl(),
      vehiculeClientControl: new FormControl(),
      nomTacheControl: new FormControl(),
      niveauPrioriteControl: new FormControl(),
      tacheDescriptionControl: new FormControl(),
      etatTacheControl: new FormControl(),
      validationOuvrier: new FormControl(),
      validationChefAtelier: new FormControl(),
      utilisateurNom: new FormControl(),
      datePriseEnCharge: new FormControl(),
      commentaireOuvrier: new FormControl(),
      pieceUtiliseEnCharge: new FormControl(),

    });
  }


  get infoClientControl() { return this.tForm.get('infoClientControl'); }
  get vehiculeClientControl() { return this.tForm.get('vehiculeClientControl'); }
  get nomTacheControl() { return this.tForm.get('nomTacheControl'); }
  get niveauPrioriteControl() { return this.tForm.get('niveauPrioriteControl'); }
  get tacheDescriptionControl() { return this.tForm.get('tacheDescriptionControl'); }
  get etatTacheControl() { return this.tForm.get('etatTacheControl'); }
  get validationChefAtelier() { return this.tForm.get('validationChefAtelier'); }
  get validationOuvrier() { return this.tForm.get('validationOuvrier'); }
  get utilisateurNom() { return this.tForm.get('utilisateurNom'); }
  get datePriseEnCharge() { return this.tForm.get('datePriseEnCharge'); }
  get commentaireOuvrier() { return this.tForm.get('commentaireOuvrier'); }
  get pieceUtiliseEnCharge() { return this.tForm.get('pieceUtiliseEnCharge'); }


  onSubmit(): void {

    this.dataFromAPI.client.nom = this.infoClientControl?.value || '';
    this.dataFromAPI.vehicule.modele = this.vehiculeClientControl?.value;
    this.dataFromAPI.client.email = this.nomTacheControl?.value;
    this.dataTache.niveauPrioriteControl = this.niveauPrioriteControl?.value;
    this.dataTache.description = this.tacheDescriptionControl?.value;
    this.dataTache.etatTacheControl = this.etatTacheControl?.value;
    this.dataTache.validationChefAtelier = this.validationChefAtelier?.value;
    this.dataTache.validationOuvrier = this.validationOuvrier?.value;
    this.dataTache.utilisateurNom = this.utilisateurNom?.value;
    this.dataTache.datePriseEnCharge = this.datePriseEnCharge?.value;
    this.dataTache.commentaireOuvrier = this.commentaireOuvrier?.value;
    this.dataTache.pieceUtiliseEnCharge = this.pieceUtiliseEnCharge?.value;

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

  addPieceToTache() {

  }

  supprimerPiece(pieceId: number) {

    // il faut supprimer la tache de la liste d'affichage de l'HTML
  }

}
