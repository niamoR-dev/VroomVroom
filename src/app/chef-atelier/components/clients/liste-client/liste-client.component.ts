import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client';
import { redirectTo } from 'src/app/shared/utils/methods';
import { URL_LIST } from 'src/app/shared/utils/url.list';
import { ApiWebService } from 'src/app/shared/web-services/api.web-service';
@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.scss']
})
export class ListeClientComponent implements OnInit {

  listeClients: any;


  constructor(private formBuilder: FormBuilder,
    private service: ApiWebService<Client>,
    private router: Router) { }


  ngOnInit(): void {
    this.getClients();

  }

  private getClients() {
    this.service.getAllData(URL_LIST.client).subscribe({
      next: data => {

        this.listeClients = data;
      },
      error: err => console.log('Error while getting clients: ' + err),
      complete: () => console.log('Getting clients complete')
    })
  }

  deleteClient(id: number) {
    this.service.deleteData(id, URL_LIST.client);
    redirectTo('chefAtelier/gestion-clients', this.router)
  }

}
