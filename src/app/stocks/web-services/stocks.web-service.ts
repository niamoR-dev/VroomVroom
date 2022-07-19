import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  uri = 'http://localhost:3000/stocks';

  constructor(private http: HttpClient) { }

  addStock(quantite: any, idProduct: any, dateStock: any) {

    const obj = {
      quantite,
      idProduct,
      dateStock,
    };

    this.http.post(`${this.uri}`, obj).subscribe(
      res => console.log('Done'));
  }

  getStocks() {
    return this.http.get<Stock[]>(`${this.uri}`);
  }



  editStock(id: any) {
    return this.http.get<Stock>(`${this.uri}/${id}`);
  }



  updateStock(quantite: any, idProduct: any, dateStock: any, id: any) {
    const obj = {
      quantite,
      idProduct,
      dateStock
    };
    this.http.put(`${this.uri}/${id}`, obj).subscribe(
      res => console.log('Done'));
  }




  deleteStock(id: number) {
    return this.http.delete<Stock>(`${this.uri}/${id}`);
  }
}


