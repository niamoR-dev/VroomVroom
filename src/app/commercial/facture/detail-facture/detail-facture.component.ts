import {Component, OnInit} from '@angular/core';
import {Facture} from "../../../shared/models/facture";
import {FactureService} from "../services/facture.service";
import {ActivatedRoute, Router} from "@angular/router";
import {redirectTo} from "../../../shared/utils/methods";
import {FactureJointure} from "../../../shared/models/factureJointure";

@Component({
  selector: 'app-detail-facture',
  templateUrl: './detail-facture.component.html',
  styleUrls: ['./detail-facture.component.scss']
})
export class DetailFactureComponent implements OnInit {
  facture!: null | FactureJointure;
  id!: number;

  constructor(private service: FactureService,
              private route: ActivatedRoute,
              private router: Router) {
  }

 async ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.facture = await this.service.getFacture(this.id)
  }

  getDevis(facture: Facture | null) {
    redirectTo(`devis/edit/${facture?.devisId}`, this.router)
  }

}
