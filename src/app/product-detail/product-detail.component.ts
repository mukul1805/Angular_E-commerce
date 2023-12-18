import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  dataList: any;
  productId!: number;         //

  constructor(private dataService: FetchDataService, private route: ActivatedRoute) { }

  ngOnInit() {                                   // Activated route is used to get info about current route
    // Get the product ID from the URL
    this.route.params.subscribe(params => {     // params contain routre parameter
      this.productId = +params['id'];           // '+' to convert the parameter to a number
      this.fetchData();
    });
  }



  fetchData() {
    this.dataService.getData().subscribe((result) => {
      this.dataList = result;                                       // getting all product

      const product = this.dataList.find((item: { id: number; }) => item.id === this.productId);     //finding product
      if (product) {
        this.dataList = [product];                                  //storing only the particular product
        console.log("products-detail", this.dataList);
      } else {
        console.error(`Product with ID ${this.productId} not found.`)
      }
    });
  }

}
