import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StocksService } from '../../web-services/stocks.web-service';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {


  angForm !: FormGroup;
  stock: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private stocksService: StocksService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.stocksService.editStock(params['id']).subscribe
        (data => {
          this.stock = data;
        });
    });
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      idProduct: ['', Validators.required],
      quantite: ['', Validators.required],
      dateStock: ['', Validators.required],
    });

  }

  updateStock(idProduct: any, quantite: any, dateStock: any, id?: any) {
    this.route.params.subscribe(params => {
      this.stocksService.updateStock(idProduct, quantite, dateStock, params.id);
      this.router.navigate(['stocks']);
    });
  }
}
