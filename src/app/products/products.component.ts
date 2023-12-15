import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  dataList: any

  constructor(private dataService: FetchDataService){ }
  
  ngOnInit(){
    this.fetchData();
  }

  fetchData() {
    this.dataService.getData().subscribe((result) => {
      this.dataList = result;
      console.log("products", this.dataList);
    });
  }

}