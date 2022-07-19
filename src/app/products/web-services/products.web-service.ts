import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from '../models/product.model';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  uri = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {

  }

  addProduct(ProductName: any, ProductDescription: any, ProductPrice: any) {

    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };

    this.http.post(`${this.uri}`, obj).subscribe(
      res => console.log('Done'));

  }

  getProducts() {
    return this.http.get<Product[]>(`${this.uri}`);
  }

  editProduct(id: any) {
    return this.http.get<Product>(`${this.uri}/${id}`);
  }

  updateProduct(ProductName: any, ProductDescription: any, ProductPrice: any, id: any) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this.http.put(`${this.uri}/${id}`, obj).subscribe(
      res => console.log('Done')
    );
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(`${this.uri}/${id}`);
  }
}
