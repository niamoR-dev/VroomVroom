import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { redirectTo } from 'src/app/shared/utils/methods';
import { URL_LIST } from 'src/app/shared/utils/url.list';
import { ApiWebService } from 'src/app/shared/web-services/api.web-service';
import { Tache } from 'src/app/shared/components/tache/models/tache';

@Component({
  selector: 'app-list-tache',
  templateUrl: './list-tache.component.html',
  styleUrls: ['./list-tache.component.scss']
})
export class ListTacheComponent implements OnInit {
  listeTaches: any;
  searchInput!: string;

  constructor(private service: ApiWebService<Tache>,
    public router: Router) { }

  ngOnInit(): void {
    this.getTaches();


  }

  deleteTache(id: number) {
    this.service.deleteData(id, URL_LIST.tache);
    redirectTo('tache/', this.router)

  }



  private getTaches() {
    this.service.getAllData(URL_LIST.client).subscribe({
      next: data => {

        this.listeTaches = data;
      },
      error: err => console.log('Error while getting clients: ' + err),
      complete: () => console.log('Getting clients complete')
    })
  }
}
