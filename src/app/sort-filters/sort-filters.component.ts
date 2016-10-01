import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sort-filters',
  templateUrl: './sort-filters.component.html',
  styleUrls: ['./sort-filters.component.scss']
})
export class SortFiltersComponent implements OnInit {

  @Input()
  filters: any[]

  @Output()
  onSortChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

  onSelectChange($event){
    this.onSortChange.emit($event.target.value)
  }

}
