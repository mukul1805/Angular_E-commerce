import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FetchDataService } from 'src/app/fetch-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private searchFunc: FetchDataService) {} 

  searchText: string = '';


  updateSearchText (event: any) {
    //this.searchText= event.target.value;
    console.log(this.searchText);
    this.searchFunc.searchedProduct(this.searchText).subscribe((data) => {
      console.log(data.rows);
    })


  }

}
