import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  dataList: any;
  totalProduct: number = 0;
  totalInStock: number = 0;
  totalOutStock: number = 0;
  searchText: string= '';

  constructor(private dataService: FetchDataService) { }

  ngOnInit() {          //to call just after the initialisation of the component
    this.fetchData();
  }

  fetchData() {
    this.dataService.getData().subscribe(
      (result) => {
        this.dataList = result;
        this.totalProduct = this.dataList.length;
        this.totalInStock = this.dataList.filter((p: { instock: boolean; })=>p.instock === true).length;
        this.totalOutStock = this.dataList.filter((p: { instock: boolean; })=>p.instock === false).length;
        console.log(this.totalProduct)
        console.log("products", this.dataList);
      },
      (error) => {
        console.log("Something wrong..!",error)
      }
    );
  }

  setSearchText(value: string) {
    this.searchText= value;
  }

  selectedFilterRadioButton: string = 'all'

  onFilterChange(value: string){
    console.log("On filter changed called")
    console.log(value)
    this.selectedFilterRadioButton= value;
  }
  
}