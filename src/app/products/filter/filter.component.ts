import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outStock: number = 0;

  @Input()
  mens: string = ''

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> =new EventEmitter<string>();

  selectedFilterRadioButton: string = 'all'

  onSelectedFilterRadioButtonChanged() {
    console.log("onSelectedFilterRadioButtonChanged function called! " + this.selectedFilterRadioButton)
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton)
  }

 
}
