import { Component, OnInit } from '@angular/core';
import { Stock } from '../../models/stock.model';
import { StocksService } from '../../web-services/stocks.web-service';

@Component({
  selector: 'app-stock-get',
  templateUrl: './stock-get.component.html',
  styleUrls: ['./stock-get.component.css']
})
export class StockGetComponent implements OnInit {

  stocks!: Stock[];

  constructor(private stocksService: StocksService) { }

  ngOnInit() {


    this.stocksService.getStocks().subscribe(
      (data: Stock[]) => {
        console.log(data)
        this.stocks = data;
      });
  }

  deleteStock(id: number) {
    this.stocksService.deleteStock(id).subscribe(res => {
      this.ngOnInit();
    });
  }
}

