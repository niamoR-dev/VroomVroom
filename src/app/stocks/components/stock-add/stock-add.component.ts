import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Product from 'src/app/products/models/product.model';
import { ProductsService } from 'src/app/products/web-services/products.web-service';
import { StocksService } from '../../web-services/stocks.web-service';

@Component({
  selector: 'app-stock-add',
  templateUrl: './stock-add.component.html',
  styleUrls: ['./stock-add.component.css']
})
export class StockAddComponent implements OnInit {


  angForm !: FormGroup;
  products !: Product[];
  idProduct: any;

  constructor(private formBuilder: FormBuilder, private stockService: StocksService, private router: Router, private productsService: ProductsService) {
    this.createForm();
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe(data => {
      this.products = data
    })
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      idProduct: ['', Validators.required],
      quantite: ['', Validators.required],
      dateStock: ['', Validators.required]
    });
  }




  onSelectedIdProduct(idProduct: any) {
    this.idProduct = idProduct;
  }


  addStock(quantite: any, dateStock: any) {
    this.stockService.addStock(this.idProduct, quantite, dateStock);
    this.router.navigate(['stocks']);
  }
}
